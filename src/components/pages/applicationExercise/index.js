import React from 'react';

import Hero from '../../../components/modules/Hero';
import Helmet from 'react-helmet';

const ApplicationExercise = React.createClass({
    propTypes: {},
    getDefaultProps () {
        return {};
    },
    render() {
        return (
            <div>
                <Helmet
                    title={"Application Exercise"}
                />
                <Hero moduleTitle={"Application"} jumboTitle={"Exercise"} text={""} subText={''}/>
                <section className="module">
                    <div className="wrapper">
                        <h2 className="module-title">Intro</h2>
                        <p className="measure-text">
                          If you are reading this document, it's because you have applied to one of our full-time web development bootcamps.
                        </p>
                        <p className="measure-text">
                          As part of your application, you'll have to complete the following exercise. The first part is an online JavaScript class that will take you through the basics of programming with JavaScript. In a second part, you will have to write a few functions to show your understanding of your newly acquired knowledge.
                        </p>
                    </div>
                </section>
                <section className="module">
                    <div className="wrapper">
                        <h2 className="module-title">Learning</h2>
                        <p className="measure-text">
                          <a target="_blank" href="https://www.codecademy.com/tracks/javascript">Complete CodeCademy's JavaScript track</a>. This will
                          give you a solid base in JavaScript programming as it relates to creating and manipulating data structures, as
                          well as creating your own functions.
                        </p>
                        <p className="measure-text">
                          Anything we do with JavaScript, no matter how complex, will end up boiling down to these fundamentals. Even as
                          we start using jQuery or NodeJS to do more advanced things, we will always be in a situation where we need to
                          manipulate data, and create modularized, re-usable code.
                        </p>
                        <p className="measure-text">
                          After completing this track, you should be ready to move on to the exercises below!
                        </p>
                    </div>
                </section>
                <section className="module">
                  <div className="wrapper">
                    <h2 className="module-title">Doing</h2>
                    <h3>Instructions</h3>
                    <p className="measure-text">
                      Now that you have the fundamentals of JavaScript nailed down, it's time to show off your newly acquired knowledge!
                      To do this, you are being asked to create a series of JavaScript functions that respond to certain problems. To
                      submit your exercises, you will be <a href="https://runkit.com/">creating a notebook on RunKit</a>.
                    </p>
                    <p className="measure-text">
                      Sign up for a RunKit account, and create a new notebook. For each exercise, insert a new text cell with the full
                      text of the exercise, followed by a code cell with your solution. After writing your function, show that it works
                      by calling it with the required parameters.
                    </p>
                    <p className="measure-text">
                      Your final, submitted notebook should look like <a href="https://runkit.com/ziad-saab/decodemtl-application">this example notebook</a>.
                    </p>

                    <h3>Exercises</h3>
                    <h4>Exercise 1</h4>
                    <p className="measure-text">
                      Write a function called <code>firstLetter</code> that takes one string argument and returns the first letter of
                      the string.
                    </p>
                    <h4>Exercise 2</h4>
                    <p className="measure-text">
                      Write a function called <code>lastLetter</code> that takes one string argument and returns the last letter of
                      the string.
                    </p>
                    <h4>Exercise 3</h4>
                    <p className="measure-text">
                      Write a function called <code>crazySum</code> that takes an array of numbers, and returns the sum of each number
                      multiplied by its position in the array.
                    </p>
                    <p className="measure-text">
                      For example, if you pass <code>[4, 8, 15, 16]</code>, the program will calculate 4*1 + 8*2 + 15*3 + 16*4 and give
                      you that back as an answer.
                    </p>
                    <h4>Exercise 4</h4>
                    <p className="measure-text">
                      Write a function called <code>fizzBuzz</code> that doesn't take any arguments and doesn't return anything. This
                      function should print all the numbers from 1 to 100. If the number is dividable by 3, then it should print FIZZ
                      instead of the number. If the number is dividable by 5, then it should print BUZZ instead of the number. If the
                      number is dividable by 3 AND 5, then it should print FIZZBUZZ instead of the number.
                    </p>
                    <h4>Exercise 5</h4>
                    <p className="measure-text">
                      Write a function called <code>factorial</code> that takes a number as argument and returns the async <a href="http://www.mathsisfun.com/definitions/factorial.html">factorial</a> of that number.
                    </p>

                    <h3>You are done :)</h3>
                    <p className="measure-text">
                      You are done! Please use the "publish" functionality at the top of your RunKit notebook to publish it with a fixed
                      URL. Then submit this URL to us at <a href="mailto:hello@decodemtl.com?subject=DecodemTL Application Exercise">hello@decodemtl.com</a>. We'll get back to
                      you shortly after :)
                    </p>
                  </div>
              </section>
          </div>
        );
    }
});

export default ApplicationExercise;
