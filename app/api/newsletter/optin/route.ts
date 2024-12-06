import { NextRequest, NextResponse } from "next/server"
import { createClient } from '@supabase/supabase-js'
import sendGridMail from '@sendgrid/mail'

const dbClient = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY)

const httpStatus = {
  OK: 200,
  BAD_REQUEST: 400,
  INTERNAL_SERVER_ERROR: 500,
}

export async function POST(request: NextRequest) {
  const email = await request.json().then(data => data.emailNewsletter)

  if (!email?.includes('@')) {
    return NextResponse
      .json({
        message: 'E-mail inválido'
      }, { status: httpStatus.BAD_REQUEST })
  }

  await dbClient
    .from('newsletter_users')
    .insert({
      email,
      optin: true,
    })

  await dbClient.auth.admin.createUser({
    email,
  })

  try {
    sendGridMail.setApiKey(process.env.SENDGRID_KEY)
    await sendGridMail.send({
      to: email,
      from: 'henri.arantes1@gmail.com',
      subject: 'Bem-vindo à newsletter',
      html: '<h1>Seja bem-vindo à nossa newsletter</h1>'
    })

    return NextResponse
      .json({
        message: 'POST request'
      }, { status: httpStatus.OK })
  } catch (error) {
    return NextResponse.json({
      message: 'Erro ao enviar e-mail: '
    }, { status: httpStatus.INTERNAL_SERVER_ERROR })
  }
}

export async function GET(request: NextRequest) {
  const { data } = await dbClient
    .from('newsletter_users')
    .select('*')

  return NextResponse
    .json({
      message: 'GET request',
      data,
    }, { status: httpStatus.OK })
}
