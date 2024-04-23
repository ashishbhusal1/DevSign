import React from "react";
import { Integrations } from "../../storage/HomeDB";

function AppIntegrations() {
  return (
    <section class="app">
      <div class="wrapper appwrap">
        <div class="content">
          <h2>Over 300+ integrations</h2>
          <p>
            Expand the capabilities of Yoora with hundreds of apps and
            integrations
          </p>
        </div>
        <div class="apps">
          <ul>
            {
                Integrations.group1.map(client=>{
                    return(
                        <li><img className={client.class} src={client.image} alt={client.name} /></li>
                    );
                })
            }
          </ul>
          <ul>
            {Integrations.group2.map(client=>{
              return(
                <li><img className={client.class} src={client.image} alt={client.name}  /></li>
              )
            })}
          </ul>
        </div>
        <div class="rest-text">
          <p>See all apps and extensions</p>
        </div>
      </div>
    </section>
  );
}

export default AppIntegrations;
