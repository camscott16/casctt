import ContactForm from "@/components/ContactForm/contactForm";

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Get in Touch</h1>
      <p className="text-gray-600 mb-6 justify-center">
        Feel free to send a message :P
      </p>
      <ContactForm />
    </div>
  );
}
