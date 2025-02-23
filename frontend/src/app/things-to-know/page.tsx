import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <section>
        <Navbar/>
    <section className="bg-white py-28 px-6 md:px-12">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-4xl lg:text-5xl font-bold text-gray-800">Things to Know</h2>
      <p className="mt-4 text-gray-600 text-lg">
        Here are some important things to know about the{" "}
        <span className="font-semibold">Smart Productivity Suite</span> and how
        it can help improve your daily tasks.
      </p>
      <div className="mt-8 space-y-6 text-left">
        <div className="bg-gray-100 p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-gray-800">🔹 AI-Powered Tools</h3>
          <p className="mt-2 text-gray-600">
            Our suite uses advanced AI technologies to provide efficient and
            accurate solutions, ensuring high-quality outputs for various tasks.
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-gray-800">🔹 User-Friendly Interface</h3>
          <p className="mt-2 text-gray-600">
            The platform is designed with simplicity in mind, making it easy
            for users of all skill levels to navigate and use the tools.
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-gray-800">🔹 Privacy & Security</h3>
          <p className="mt-2 text-gray-600">
            We prioritize your privacy and security, ensuring that your data
            remains safe while using our tools.
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-gray-800">🔹 Constant Updates</h3>
          <p className="mt-2 text-gray-600">
            We continuously improve and expand our tools to meet the evolving
            needs of our users.
          </p>
        </div>
      </div>
    </div>
  </section>
  </section>
  )
}

export default page