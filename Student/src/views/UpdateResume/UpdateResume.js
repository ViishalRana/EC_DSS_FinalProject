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


// const styles = {
//   typo: {
//     paddingLeft: "25%",
//     marginBottom: "40px",
//     position: "relative"
//   },
//   note: {
//     fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
//     bottom: "10px",
//     color: "#c0c1c2",
//     display: "block",
//     fontWeight: "400",
//     fontSize: "13px",
//     lineHeight: "13px",
//     left: "0",
//     marginLeft: "20px",
//     position: "absolute",
//     width: "260px"
//   },
//   cardCategoryWhite: {
//     color: "rgba(255,255,255,.62)",
//     margin: "0",
//     fontSize: "14px",
//     marginTop: "0",
//     marginBottom: "0"
//   },
//   cardTitleWhite: {
//     color: "#FFFFFF",
//     marginTop: "0px",
//     minHeight: "auto",
//     fontWeight: "300",
//     fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
//     marginBottom: "3px",
//     textDecoration: "none"
//   }
// };

// const useStyles = makeStyles(styles);

export default function TypographyPage() {
  // const classes = useStyles();
  return (
    <Card>
      <CardBody>
        <div>
          <h3><b>Update Resume</b></h3>
        </div>
        <div>
          <p>your resume:*</p>
          <input type="file" name="myfile"></input>
        </div>
        <br></br>
        <div>
          <Button color="danger">Update</Button>
          <Button color="primary">Download</Button>
        </div>
      </CardBody>
    </Card>
  );
}
