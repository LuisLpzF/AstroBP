import nodemailer from 'nodemailer';

export async function POST({ request }) {
    try {
        const formData = await request.json();
        const { name, email, message } = formData;

        
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT), 
            secure: process.env.SMTP_SECURE === 'true',
            requireTLS: true, // true for 465, false for other ports
            auth: {
              user: process.env.SMTP_USER,
              pass: process.env.SMTP_PASS,
            },
          });   

        // Configurar el contenido del correo
        const mailOptions = {
            from: `"${name}" <${email}>`,
            to: process.env.DESTINATARIO,
            subject: `${name}`,
            text: `Has recibido un nuevo mensaje de contacto:\n\n${name}\n${email}\n${message}`
        };

        // Enviar el correo
        await transporter.sendMail(mailOptions);

        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (error) {
        console.error("Error al enviar correo:", error);
        return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
    }
}
