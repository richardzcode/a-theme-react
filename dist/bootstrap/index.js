import React from 'react';
import FontAwesome from 'react-fontawesome';

export const Container = {
    fontFamily: `-apple-system,
                BlinkMacSystemFont,
                "Segoe UI",
                Roboto,
                "Helvetica Neue",
                Arial,
                sans-serif,
                "Apple Color Emoji",
                "Segoe UI Emoji",
                "Segoe UI Symbol"`,
    fontWeight: '400',
    lineHeight: '1.5',
    color: '#212529',
    textAlign: 'left',
    paddingLeft: '15px',
    paddingRight: '15px'
};

export const NavBar = {
    position: 'relative',
    marginBottom: '20px',
    marginLeft: '-15px',
    marginRight: '-15px',
    border: '1px solid transparent',
    backgroundColor: '#f8f8f8',
    borderColor: '#e7e7e7'
};

export const NavRight = {
    textAlign: 'right'
};

export const Nav = {
    margin: '7.5px'
};

export const NavItem = {
    display: 'inline-block',
    padding: '10px 5px',
    lineHeight: '20px'
};

export const NavButton = {
    display: 'inline-block',
    padding: '6px 12px',
    marginTop: '8px',
    marginBottom: '8px',
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '1.42857143',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    verticalAlign: 'middle',
    touchAction: 'manipulation',
    cursor: 'pointer',
    userSelect: 'none',
    backgroundImage: 'none',
    border: '1px solid transparent',
    borderRadius: '4px',
    color: '#333',
    backgroundColor: '#fff',
    borderColor: '#ccc'
};

export const FormContainer = {
    textAlign: 'center'
};

export const FormSection = {
    marginBottom: '20px',
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    borderRadius: '4px',
    textAlign: 'left',
    width: '500px',
    display: 'inline-block'
};

export const ErrorSection = {
    marginBottom: '20px',
    color: '#fff',
    backgroundColor: '#f0ad4e',
    border: '1px solid #eea236',
    borderRadius: '4px',
    textAlign: 'left'
};

export const SectionHeader = {
    color: '#fff',
    backgroundColor: '#337ab7',
    borderColor: '#337ab7',
    padding: '10px 15px',
    borderBottom: '1px solid transparent',
    borderTopLeftRadius: '3px',
    borderTopRightRadius: '3px',
    textAlign: 'center'
};

export const SectionFooter = {
    color: '#333',
    backgroundColor: '#f5f5f5',
    padding: '10px 15px',
    borderTop: '1px solid #ddd',
    borderTopLeftRadius: '3px',
    borderTopRightRadius: '3px'
};

export const SectionBody = {
    padding: '15px'
};

export const FormRow = {
    marginBottom: '15px'
};

export const ActionRow = {
    marginBottom: '15px'
};

export const Input = {
    display: 'block',
    width: '100%',
    height: '34px',
    padding: '6px 12px',
    fontSize: '14px',
    lineHeight: '1.42857143',
    color: '#555',
    backgroundColor: '#fff',
    backgroundImage: 'none',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxShadow: 'inset 0 1px 1px rgba(0,0,0,.075)',
    boxSizing: 'border-box',
    transition: 'border-color ease-in-out .15s,box-shadow ease-in-out .15s'
};

export const Button = {
    display: 'inline-block',
    padding: '6px 12px',
    marginBottom: '0',
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '1.42857143',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    verticalAlign: 'middle',
    touchAction: 'manipulation',
    cursor: 'pointer',
    userSelect: 'none',
    backgroundImage: 'none',
    border: '1px solid transparent',
    borderRadius: '4px',
    color: '#333',
    backgroundColor: '#fff',
    borderColor: '#ccc'
};

export const SignInButton = {
    position: 'relative',
    padding: '6px 12px 6px 44px',
    fontSize: '14px',
    textAlign: 'left',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: 'block',
    width: '100%',
    marginTop: '2px'
};

export const SignInButtonGoogle = {
    position: 'relative',
    padding: '6px 12px 6px 44px',
    fontSize: '14px',
    textAlign: 'left',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: 'block',
    width: '100%',
    color: '#fff',
    backgroundColor: '#dd4b39',
    borderColor: 'rgba(0,0,0,0.2)',
    marginTop: '2px',
    before: {
        content: React.createElement(FontAwesome, { name: 'google' }),
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 10,
        color: '#fff',
        padding: '2px 12px 0',
        fontSize: '20px'
    }
};

export const SignInButtonFacebook = {
    position: 'relative',
    padding: '6px 12px 6px 44px',
    fontSize: '14px',
    textAlign: 'left',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: 'block',
    width: '100%',
    color: '#fff',
    backgroundColor: '#3b5998',
    borderColor: 'rgba(0,0,0,0.2)',
    marginTop: '2px',
    before: {
        content: React.createElement(FontAwesome, { name: 'facebook' }),
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 10,
        color: '#fff',
        padding: '2px 12px 0',
        fontSize: '20px'
    }
};

export const Space = {
    display: 'inline-block',
    width: '20px'
};

export const Col6 = {
    display: 'inline-block',
    width: '50%'
};

export const A = {
    color: '#007bff'
};

const Bootstrap = {
    container: Container,

    navBar: NavBar,
    nav: Nav,
    navRight: NavRight,
    navItem: NavItem,
    navButton: NavButton,

    formContainer: FormContainer,
    formSection: FormSection,
    errorSection: ErrorSection,
    sectionHeader: SectionHeader,
    sectionBody: SectionBody,
    sectionFooter: SectionFooter,

    formRow: FormRow,
    actionRow: ActionRow,

    space: Space,

    signInButton: SignInButton,
    signInButtonGoogle: SignInButtonGoogle,
    signInButtonFacebook: SignInButtonFacebook,

    input: Input,
    button: Button,
    a: A,

    col6: Col6
};

export default Bootstrap;