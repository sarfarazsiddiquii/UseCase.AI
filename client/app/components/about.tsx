export default function About() {
    return (
      <section id="about" className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">About UseCase.AI</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold mb-4">Our Story</h3>
              <p className="text-gray-600">
                UseCase.AI helps industries streamline their hiring processes by leveraging cutting-edge AI technology to automate and enhance technical interviews, saving time and resources while ensuring high-quality candidate assessments.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold mb-4">Our Vision</h3>
                <p className="text-gray-600">
                Our vision is to revolutionize the workflow and income of businesses by providing AI-driven solutions that suggest optimal use cases, enhancing efficiency and effectiveness in various processes.
                </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold mb-4">Our Technology</h3>
              <p className="text-gray-600">
                Our technology leverages advanced machine learning algorithms and natural language processing to analyze vast amounts of data and generate actionable insights.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  