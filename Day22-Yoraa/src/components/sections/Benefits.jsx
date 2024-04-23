import React from "react";
import BenefitsCard from "./BenefitsCard";
import { BenefitsCards } from "../../storage/HomeDB";

function Benefits() {
  return (
    <section class="benefit">
      <div class="wrapper benefitwrap">
        <div class="content">
          <h2>Here's how Yoora can benefit your business</h2>
          <p>
            Buid more meaningful and lasting relationships - better understand
            their needs, identify new opportunities to help. address any
            problems faster.
          </p>
        </div>
        <div class="card">
          {BenefitsCards.map((card) => {
            return (
              <BenefitsCard
                key={card.id}
                title={card.title}
                desc={card.description}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
