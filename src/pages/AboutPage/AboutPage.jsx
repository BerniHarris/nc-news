import "./AboutPage.css";

export default function AboutPage() {
    return (
        <div className="about-box">
            <div className="inner-about-box">
                <h1>About</h1>
                <div className="about">
                    <p>
                        NC news has been created as part of my 13 week coding bootcamp at
                        Northcoders and my first full stack application.
                        <p>
                            Using the API I made in our backend module, NC News has been created as
                            a simplified reddit style website using my freshly learnt front end
                            knowledge.
                        </p>
                    </p>

                    <h2>Features</h2>
                    <p>Using my API, NC News allows you to:</p>
                    <p>
                        <ul>
                            <li>View a list of articles</li>
                            <li>Filter articles by topics</li>
                            <li>View comments written about specific articles</li>
                            <li>Post comments about articles</li>
                            <li>Delete comments</li>
                            <li>Like/ vote on articles</li>
                            <li>
                                Sort articles by when they were created, comment count and likes
                            </li>
                        </ul>
                    </p>

                    <section className="about-updates">
                        <h2>October 2023 updates!</h2>
                        <p>
                            Out of curiosity, I revisited this project to see how much I have
                            progressed. What was super hard when first creating this now seems so
                            much easier and so I have made a few tweaks to improve the code. Changes
                            made:
                        </p>
                        <p>
                            <ul>
                                <li>Simplified existing code to make it more readable</li>
                                <li>Removed duplicate code</li>
                                <li>Further seperated functionality into reusable components</li>
                                <li>Improved the file structure</li>
                            </ul>
                        </p>
                    </section>
                    <h2>Why The Pigeon Theme?</h2>
                    <p>
                        During the course, our lovely tutors often used "Daves Pigeon Loft" to help
                        explain concepts. I decided to create my page with a pigeon theme just as a
                        fun nod and thank you towards them for all their help :)
                    </p>
                </div>
                <h2>Thank you for looking :)</h2>
            </div>
        </div>
    );
}
