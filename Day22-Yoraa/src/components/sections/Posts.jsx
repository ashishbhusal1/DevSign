import React from "react";
import { ServiceContents, RevenueContent } from "../../storage/HomeDB";
import Post1 from "./../../images/posts/post1.png";

function Posts() {
  return (
    <section class="posts">
      <div class="wrapper postwrap">
        <div class="post-heading">
          <h2>What's new at Yoora?</h2>
          <p>See all</p>
        </div>
        <div class="post-content">
          <ul>
            {ServiceContents.map((content) => {
              return (
                <li>
                  <span>{content.about}</span>
                  <div class="line"></div>
                  <img src={Post1} alt="" />
                  <h4>{content.heading}</h4>
                  <span>{content.date}</span>
                  <span class="span2">{content.name}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <div class="revenue">
          <h2>Real-life results and revenue</h2>
          <p>
            See how companies like yours have smashed their sales success goals
          </p>
          <ul>
            {RevenueContent.map((revenue) => {
              return (
                <li>
                  <div class="line"></div>
                  <div class="wrap">
                    <div class="sales">
                      <h3>{revenue.sale}</h3>
                      <h4>{revenue.salestit}</h4>
                    </div>
                    <div class="content">
                      <h4>{revenue.title}</h4>
                      <div class="author">
                        <h5>{revenue.name}</h5>
                        <p>{revenue.post}</p>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Posts;
