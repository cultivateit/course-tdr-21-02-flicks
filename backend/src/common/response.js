const corsHeaders = {
  'Access-Control-Allow-Credentials': false,
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Expose-Headers': '*',
}

export const Response = ({ status, headers, jsonBody }) => {
  return {
    statusCode: status,
    headers: {
      ...corsHeaders,
      ...headers,
    },
    ...jsonBody ? { body: JSON.stringify(jsonBody) } : {},
  }
}

export const OkResponse = jsonBody => Response({ status: 200, jsonBody })
export const CreatedResponse = location => Response({ status: 201, headers: { 'Location': location } })
export const NoContentResponse = () => Response({ status: 204 })

export const BadRequestResponse = () => Response({ status: 400 })
export const NotFoundResponse = () => Response({ status: 404 })
export const ConflictResponse = () => Response({ status: 409 })

export const ServiceUnavailableResponse = () => Response({ status: 503 })
