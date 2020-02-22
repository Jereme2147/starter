import React from 'react'
// import variables from "../components/variables.js"
import { graphql} from "gatsby"
// import Section from "../components/section.js"

export const data = graphql`
         query {
           allContentfulVendor(sort: { fields: category }) {
             edges {
               node {
                 category
                 id
               }
             }
           }
         }
       `
class ProductGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
        this.handleWindowSizeChange() // Set width
        window.addEventListener('resize', this.handleWindowSizeChange)
        this.findCategories();
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange)
    }
    handleWindowSizeChange = () => {
        if (window.innerWidth < 950) {
            this.setState({ width: true })
        } else {
            this.setState({ width: false })
        }

    }
    //fiond unique categories and sets state to only unique ones. 
    findCategories = () => {
        const stuff = []
        this.props.data.allContentfulVendor.edges.map(item => {
            let go = 0
            stuff.map(thing => {
                if (thing[0] === item.node.category[0]) {
                    go = 1
                } else {
                    go = 0
                }
            })
            if (go == 0) {
                stuff.push(item.node.category)
            }
        })
        let stuff2 = []
        stuff.map(another => {
            stuff2.push(another[0])
        })
        return stuff2;
    }

    render() {
        const style = {
            display: "flex",
            flexDirection: `${this.state.width === true ? 'column' : 'row'}`,
            width: "100%",
            justifyContent: "space-around",
            alignItems: "center",
            padding: "20px 0",
            fontSize: `${this.state.width === true ? "1.3rem" : "2rem"}`
        }
        return (
           <div>
               <h1>PRODUCT</h1>
           </div>
        )
    }
}

export default ProductGroup