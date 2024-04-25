import React from "react";

function InternalHero({css,title,description}) {
  return (
    <section class="internal-hero anas2s fadeInDown">
      <div class="wrapper herowrper">
        <div class={css}>
          <div class="ihi-content internalherader">
            <h1 class="anas3s fadeInUp">
              {title}
            </h1>
            <p class="anas4s fadeInUp">
            {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InternalHero;
