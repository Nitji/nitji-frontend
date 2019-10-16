import * as React from "react";
import {useEffect} from "react";

/* redux */
import {connect} from "react-redux";
import {changeDress, changeShoes} from "../../redux/actions/sections/homeActions";

/* layouts */
import BoxLayout from "../../layouts/BoxLayout";

/* json */
let homeShoppingData = require('./../../middleware/data/shopping.json');

/* images */
const shoesImage = require('../../multimedia/images/shoes.jpg');

interface HomeShoppingContainerProps {
    shoes: string;
    dress: string;
    changeDress: any;
    changeShoes: any;
}

const HomeShoppingContainer: React.FC<HomeShoppingContainerProps> = (props) => {
    /* On upload, but stopped at refresh. */

    useEffect(() => {
        const fetchComment = async () => {
            // setLoading(true);
            // const res = await axiosl.get('url')
            // *change state*
            // setLoading(false);

        }
    }, []);

    return (
        <>
            <BoxLayout
                titleHeader="Cafe content"
                button1={"Recipe"}
                button2={"Pictures"}
                contentData={'New type of cake'}
                image={shoesImage}
                changeItem={props.changeShoes}
            />
        </>
    )
};

const mapStateToProps = (state: any) => {
    return {
        shoes: state.shoppingReducer.shoes,
        dress: state.shoppingReducer.dress
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        changeShoes: (text: string) => dispatch(changeShoes(text)),
        changeDress: (text: string) => dispatch(changeDress(text))
    }
};

const HomeShoppingState = connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeShoppingContainer);


export default HomeShoppingState;