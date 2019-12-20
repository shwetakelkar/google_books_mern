import React, {Component} from "react";
import API from "../../utils/API";
import Card from "../../components/Card"



class Saved extends Component {

    state = {
        savedBooks:[]
    }
    componentDidMount(){
        this.loadSavedBooks();
   }
   handleDeleteBtn =(id)=>{
    API.deleteBook(id).then(res=>this.loadSavedBooks()).catch(err=>console.log(err))
   }
   

   displayResult=()=>{
       return(
           
           this.state.savedBooks.map(elem=>
        
            <Card title={elem.title}
                author={elem.author} 
                description={elem.description}
                link={elem.link}
                thumbnail={elem.thumbnail}
                id={elem._id}
                handleDeleteBtn ={this.handleDeleteBtn}/>
           )
       )

   }

    loadSavedBooks() {
        API.getAllSavedBooks()
            .then(res => {
                console.log(res);
                this.setState({ savedBooks: res.data });
            }).catch(err => console.log(err));
    }

    render(){
        return(
            <div className="container">
                {this.state.savedBooks.length?
                    this.displayResult()
                     
                :<div/>}
            </div>
        )
        
    }
    
}

export default Saved;