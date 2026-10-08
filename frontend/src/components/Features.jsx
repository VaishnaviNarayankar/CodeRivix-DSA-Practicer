import FeatureCard from "./FeatureCard";

function Features() {

    const features = [

        {
            title: "Topic-wise Learning",
            description: "Practice DSA topic by topic in a structured manner."
        },

        {
            title: "Difficulty Classification",
            description: "Solve Easy, Medium and Hard problems."
        },

        {
            title: "Video Solutions",
            description: "Watch YouTube explanations for every problem."
        },

        {
            title: "Concept Revision",
            description: "Revise concepts anytime from one platform."
        }

    ];

    return (

        <>

            <h2 className="features-heading">
                Why Choose CodeRivix?
            </h2>

            <section className="features">

                {features.map((feature, index) => (

                    <FeatureCard

                        key={index}

                        title={feature.title}

                        description={feature.description}

                    />

                ))}

            </section>

        </>

    );

}

export default Features;