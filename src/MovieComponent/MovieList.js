import React, { Component } from 'react';
import MaterialTable from "material-table";
import * as MoviesApi from "../crud/MoviesCrud";
import { forwardRef } from 'react';
import { Link } from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import { makeStyles } from '@material-ui/core/styles';
import {
  Portlet,
  PortletBody,
  PortletHeader,
  PortletHeaderToolbar
} from "../content/Portlet";
import {
  Select,
  MenuItem,
} from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));


class MovieList extends Component{
    state = { users: null}
    constructor(props) {
        super(props);
       
    }
    MovieDetail(e,data)
    {
      e.preventDefault();
      this.props.history.push({ pathname: "/MovieDetails", state: { imdbID: data.imdbID} })
     
    }

    componentDidMount() {
        MoviesApi.getMoviesList().then((data) => {
     
         this.setState({ ...this.state, users: data.data})
         console.log(this.state);
        }).catch((error) => {
            console.log("Error fetching users", error);
        });
    }
    render() {
      
      const tableIcons = {
        Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
        Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
        Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
        DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
        Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
        Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
        Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
        FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
        LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
        NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
        PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
        ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
        SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
        ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
        ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
      };
      
      
         const  {users}  = this.state;
         if (!users) {
            return null;
        }
         setTimeout(() => {
          console.log('This will run after 1 second!')
        }, 1000);
         console.log(users);
        return (
 
              <Portlet>
                <PortletBody>
          <MaterialTable icons={tableIcons}
                            title=""
                            columns={[
                              {
                                    title: "language",
                                    //field: "language",
                                    render:rowData=>(<div>
                                       <a href="#" onClick={(e) =>{this.MovieDetail(e,rowData)}}>{rowData.language}</a>
                                       </div>)
                                } ,
                                {
                                  title: "location",
                                  field: "location",
                              }  ,
                              {
                                title: "plot",
                                field: "plot"
                                
                            } ,
                            {
                            
                              title: 'poster',
                              sortable: false,
                              render: rowData =>(<div>  <Avatar alt="Remy Sharp" src={rowData.poster} /></div>)
                             },                                
                            {
                              title:'Sound Effects',
                              render:rowData=>( 
                                    rowData.soundEffects.map((dt, i) => {                              
                               return (<MenuItem key={i} value={dt}>{dt}</MenuItem>)                                 
                               })
                            )}
                            ]}
                            data={users}
                            options={{
                                sorting: true,
                                actionsColumnIndex: -1,
                                showTitle: false,
                                search: true,
                                searchFieldAlignment: "left"
                            }}
                           
                        />
                        </PortletBody>
                         </Portlet>
            )
}
}
export default MovieList;