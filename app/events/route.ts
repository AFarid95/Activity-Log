import { PrismaClient } from '@prisma/client'
import { type NextRequest } from 'next/server'
import pageSize from './pageSize'

const prisma = new PrismaClient()

export async function GET(request: NextRequest) {
    let response = null

    const possiblyNullPageNumber =
        request.nextUrl.searchParams.get('page')

    const pageNumber = 
        possiblyNullPageNumber? Number(possiblyNullPageNumber) : 0

    const possiblyNullSearchedString =
        request.nextUrl.searchParams.get('search')
    
    const searchedString = 
        possiblyNullSearchedString? possiblyNullSearchedString : ''

    const events = await prisma.event.findMany({
        skip: pageSize * pageNumber,
        take: pageSize,
        orderBy: {
            occurredAt: 'desc'
        },
        where: {
            OR: [
                {
                    id: {
                        contains: searchedString
                    }
                },
                {
                    actorId: {
                        contains: searchedString
                    }
                },
                {
                    actorName: {
                        contains: searchedString
                    }
                },
                {
                    actionId: {
                        contains: searchedString
                    }
                },
                {
                    actionName: {
                        contains: searchedString
                    }
                },
                {
                    targetId: {
                        contains: searchedString
                    }
                },
                {
                    targetName: {
                        contains: searchedString
                    }
                }
            ]
        }
    })
    .then(events => {
        response = Response.json(events)
    })
    .catch(() => {
        response = new Response('', { status: 500 })
    })
    
    return response
}

export async function POST(request: Request) {
    let response = null

    await request
            .json()
            .then(event => prisma.event.create({ data: event }))
            .then(() => {
                response = new Response('', { status: 200 })
            })
            .catch(e => {
                switch(e.name) {
                    case 'SyntaxError':
                    case 'PrismaClientValidationError':
                        response = new Response(
                            'Invalid event object',
                            { status: 400 })
                        break

                    case 'PrismaClientKnownRequestError':
                        response = new Response(
                            'Event ID already present',
                            { status: 400 })
                        break
                        
                    default:
                        response = new Response('', { status: 500 })
                }
            })
    
    return response
}