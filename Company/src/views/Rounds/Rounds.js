import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Quote from "components/Typography/Quote.js";
import Muted from "components/Typography/Muted.js";
import Primary from "components/Typography/Primary.js";
import Info from "components/Typography/Info.js";
import Success from "components/Typography/Success.js";
import Warning from "components/Typography/Warning.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
// // import CardHeader from "views/Logout/node_modules/views/Company/node_modules/views/MyPerformance/node_modules/components/Card/CardHeader.js.js.js.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";
import Table from "components/Table/Table.js";

export default function TypographyPage() {
  // const classes = useStyles();
  return (
    <Card>
      <CardBody>
      <div>
        <h3><b>Company Rounds</b></h3>
      </div>
          <Table
            tableData={[
              [<h4>Round 1</h4>,<input type="text"/>],
              [<h4>Shortlist from Round 1</h4>,<input type="text"/>, <Button color="danger">Submit</Button>],
              [<h4>Round 2</h4>,<input type="text"/>],
              [<h4>Shortlist from Round 2</h4>,<input type="text"/>, <Button color="danger">Submit</Button>],
              [<h4>Round 3</h4>,<input type="text"/>],
              [<h4>Shortlist from Round 3</h4>,<input type="text"/>, <Button color="danger">Submit</Button>],
              [<h4>Round 4</h4>,<input type="text"/>],
              [<h4>Shortlist from Round 4</h4>,<input type="text"/>, <Button color="danger">Submit</Button>],
              [<h4>HR Round</h4>,<input type="text"/>],
              [<h4>Shortlist from HR</h4>,<input type="text"/>, <Button color="danger">Submit</Button>],
              [<h4>Final Selection</h4>,<input type="text"/>],
              [<h4>Hired Students</h4>,<input type="text"/>, <Button color="danger">Submit</Button>],
            ]}
        />
      </CardBody>
    </Card>
  );
}
