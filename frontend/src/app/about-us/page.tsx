import Navbar from '@/components/Navbar'
import React from 'react'

const Page = () => {
  return (
    <section>
        <Navbar/>
    <section className="py-28 px-6 md:px-12">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-4xl lg:text-5xl font-bold text-gray-800">About Us</h2>
      <p className="mt-8 text-gray-600 text-lg">
        Welcome to <span className="font-semibold">Smart Productivity Suite</span>, an innovative 
        AI-powered web platform designed to enhance productivity and simplify 
        everyday tasks. Our suite offers a variety of intelligent utilities, 
        including English Typing, Barcode Generation, Text-to-Speech, 
        Speech-to-Text, and a powerful Paraphraser.
      </p>
      <p className="mt-4 text-gray-600 text-lg">
        Our mission is to empower users with smart tools that streamline 
        workflows, boost efficiency, and make technology accessible to everyone. 
        Whether you need to convert speech to text, generate barcodes, or refine 
        your writing, our platform has you covered.
      </p>
      <p className="mt-4 text-gray-600 text-lg">
        Join us on our journey to revolutionize productivity with AI-driven 
        solutions. Explore our suite and experience the future of smart utilities today!
      </p>
    </div>
  </section>
  </section>
  )
}

export default Page