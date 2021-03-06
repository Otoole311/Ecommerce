import styled from 'styled-components';
//import '../../../css/Navbar.css'

const Styles = styled.div`
.navbar { background-color: #222; }
    a, .navbar-nav, .navbar-light .nav-link {
    color: #9FFFCB;
    &:hover { color: white; }
    }
    .navbar-brand {
    font-size: 1.4em;
    color: #9FFFCB;
    &:hover { color: white; }
    }
    .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
    }
`;

export default Styles;