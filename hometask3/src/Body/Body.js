import React from "react";
import reactDom from "react-dom";
import "./body.scss";

const Body = () => {
  return (
    <div>
      <main>
        <div class="header">
          <ul>
            <li>
              <label for="category">SELECT CATEGORY</label>
            </li>
            <li>
              <select name="category" id="headerCategory">
                <option value="All">all</option>
                <option value="sport">sport</option>
                <option value="finance">finance</option>
              </select>
            </li>
          </ul>

          <ul>
            <li>
              <br />
            </li>
            <li>
              <h2>ALL NEWS</h2>
            </li>
          </ul>

          <ul>
            <li>
              <label for="subscribe">SUBSCRIBE</label>
            </li>
            <li>
              <form action="#">
                <input
                  type="text"
                  name="subscribe"
                  id="subscribe"
                  placeholder="email id"
                />
                <button>Subscribe</button>
              </form>
            </li>
          </ul>
        </div>

        <hr color="black" weight="2" />

        <div class="news">
          <div>
            <div class="box"></div>
          </div>
          <div class="content">
            <h3>Title One</h3>
            <h6>Posted on Wednesday 05:25 PM </h6>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              perferendis sed deserunt recusandae accusantium amet consequatur
              excepturi, illo deleniti iste blanditiis omnis officia, quasi
              ipsa?
            </li>
            <button id="continue">Continue Reading..</button>
          </div>
        </div>

        <hr />
        <div class="news">
          <div>
            <div class="box"></div>
          </div>
          <div class="content">
            <h3>Title Two</h3>
            <h6>Posted on Wednesday 05:25 PM </h6>
            <li>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Inventore, debitis! Nisi nihil inventore earum dicta debitis
              facilis in. Suscipit iste saepe assumenda fuga, veniam nemo.
            </li>
            <button id="continue">Continue Reading..</button>
          </div>
        </div>

        <hr />

        <div class="news">
          <div>
            <div class="box"></div>
          </div>
          <div class="content">
            <h3>Title Three</h3>
            <h6>Posted on Wednesday 05:25 PM </h6>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              dolorem sunt ab soluta quasi doloremque nihil unde explicabo,
              porro odit sed aperiam nam. Reiciendis, consequuntur?
            </li>
            <button id="continue">Continue Reading..</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Body;
