import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/resources/Home.css'

class Home extends React.Component{
    render(){
        return(
        <div id="Web_1920__2">
            <svg className="Rectangle_1">
                <rect id="Rectangle_1" rx="0" ry="0" x="0" y="0" width="1920" height="141">
                </rect>
            </svg>

            <svg className="Path_4" viewBox="0 26 1 1">
                <path id="Path_4" d="M 0 26">
                </path>
            </svg>
            <svg className="Path_90" viewBox="-24.609 -21.484 44.918 46.873">
            <path id="Path_90" d="M -2.150453567504883 -21.48432350158691 C 1.894567489624023 -21.48432350158691 5.637720108032227 -20.42905235290527 9.079008102416992 -18.31850624084473 C 12.52029132843018 -16.20796394348145 15.2521915435791 -13.35715293884277 17.27470207214355 -9.766078948974609 C 19.29721260070801 -6.175004959106445 20.3084716796875 -2.268922805786133 20.3084716796875 1.952165603637695 C 20.3084716796875 6.173254013061523 19.29721260070801 10.07933521270752 17.27470207214355 13.67041015625 C 15.2521915435791 17.2614860534668 12.52029132843018 20.11229515075684 9.079008102416992 22.22283935546875 C 5.637720108032227 24.33338165283203 1.894567489624023 25.3886547088623 -2.150453567504883 25.3886547088623 C -6.195474624633789 25.3886547088623 -9.938627243041992 24.33338165283203 -13.37991523742676 22.22283935546875 C -16.82120323181152 20.11229515075684 -19.55310249328613 17.2614860534668 -21.57560920715332 13.67041015625 C -23.59811973571777 10.07933521270752 -24.60937309265137 6.173254013061523 -24.60937309265137 1.952165603637695 C -24.60937309265137 -2.268922805786133 -23.59811973571777 -6.175004959106445 -21.57560920715332 -9.766078948974609 C -19.55310249328613 -13.35715293884277 -16.82120323181152 -16.20796394348145 -13.37991523742676 -18.31850624084473 C -9.938627243041992 -20.42905235290527 -6.195474624633789 -21.48432350158691 -2.150453567504883 -21.48432350158691 Z M -2.150453567504883 -16.94822883605957 C -5.410619735717773 -16.94822883605957 -8.429292678833008 -16.09771156311035 -11.20647239685059 -14.39667320251465 C -13.9836483001709 -12.69564247131348 -16.18728065490723 -10.39609146118164 -17.81736183166504 -7.498031616210938 C -19.44744682312012 -4.599969863891602 -20.26248741149902 -1.434154510498047 -20.26248741149902 1.999416351318359 C -20.26248741149902 5.432987213134766 -19.41726112365723 8.598803520202637 -17.72680473327637 11.49686431884766 C -17.36456489562988 10.11083602905273 -16.76082801818848 8.913811683654785 -15.91559791564941 7.905789375305176 C -14.88925361633301 6.70876407623291 -13.59122276306152 5.858246803283691 -12.02151298522949 5.354236602783203 C -13.16860771179199 3.401195526123047 -13.74215507507324 1.290651321411133 -13.74215507507324 -0.9773960113525391 C -13.74215507507324 -3.245443344116211 -13.22898292541504 -5.308734893798828 -12.20263481140137 -7.167272567749023 C -11.17628288269043 -9.025812149047852 -9.772605895996094 -10.4905948638916 -7.991584777832031 -11.56161880493164 C -6.210567474365234 -12.63263893127441 -4.263525009155273 -13.16814994812012 -2.150453567504883 -13.16814994812012 C -0.03738212585449219 -13.16814994812012 1.909660339355469 -12.63263893127441 3.690677642822266 -11.56161880493164 C 5.471693992614746 -10.4905948638916 6.87537670135498 -9.025812149047852 7.90172290802002 -7.167272567749023 C 8.928072929382324 -5.308734893798828 9.441248893737793 -3.276943206787109 9.441248893737793 -1.071897506713867 C 9.441248893737793 1.259151458740234 8.867701530456543 3.401195526123047 7.720602035522461 5.354236602783203 C 9.290313720703125 5.858246803283691 10.58834552764893 6.70876407623291 11.61469173431396 7.905789375305176 C 12.45992088317871 8.913811683654785 13.06365394592285 10.11083602905273 13.42589569091797 11.49686431884766 C 15.11635398864746 8.598803520202637 15.96157932281494 5.432987213134766 15.96157932281494 1.999416351318359 C 15.96157932281494 -1.434154510498047 15.14653968811035 -4.599969863891602 13.51645278930664 -7.498031616210938 C 11.88637256622314 -10.39609146118164 9.682741165161133 -12.69564247131348 6.905561447143555 -14.39667320251465 C 4.128383636474609 -16.09771156311035 1.109710693359375 -16.94822883605957 -2.150453567504883 -16.94822883605957 Z M 5.094361305236816 -1.071897506713867 C 5.094361305236816 -3.150941848754883 4.384973526000977 -4.930727005004883 2.966196060180664 -6.411258697509766 C 1.547418594360352 -7.891790390014648 -0.1581306457519531 -8.632053375244141 -2.150453567504883 -8.632053375244141 C -4.142778396606445 -8.632053375244141 -5.84832763671875 -7.891790390014648 -7.26710319519043 -6.411258697509766 C -8.685880661010742 -4.930727005004883 -9.395269393920898 -3.150941848754883 -9.395269393920898 -1.071897506713867 C -9.395269393920898 1.007146835327148 -8.685880661010742 2.786931991577148 -7.26710319519043 4.267462730407715 C -5.84832763671875 5.74799633026123 -4.142778396606445 6.488259315490723 -2.150453567504883 6.488259315490723 C -0.1581306457519531 6.488259315490723 1.547418594360352 5.74799633026123 2.966196060180664 4.267462730407715 C 4.384973526000977 2.786931991577148 5.094361305236816 1.007146835327148 5.094361305236816 -1.071897506713867 Z M -13.74215507507324 16.50547027587891 C -12.11207389831543 17.89149856567383 -10.31596374511719 18.96252059936523 -8.353826522827148 19.71853637695312 C -6.391689300537109 20.47455215454102 -4.323898315429688 20.85256004333496 -2.150453567504883 20.85256004333496 C 0.02298927307128906 20.85256004333496 2.090780258178711 20.47455215454102 4.052919387817383 19.71853637695312 C 6.015052795410156 18.96252059936523 7.811161994934082 17.89149856567383 9.441248893737793 16.50547027587891 L 9.441248893737793 13.85941505432129 C 9.441248893737793 12.91439437866211 9.169568061828613 12.04812622070312 8.626205444335938 11.26060962677002 C 8.082843780517578 10.47309398651123 7.358364105224609 9.953333854675293 6.452763557434082 9.701327323913574 L 4.188758850097656 9.039813995361328 C 2.317182540893555 10.36284065246582 0.2041110992431641 11.02435493469238 -2.150453567504883 11.02435493469238 C -4.50501823425293 11.02435493469238 -6.618087768554688 10.36284065246582 -8.489665985107422 9.039813995361328 L -10.75367164611816 9.701327323913574 C -11.65927314758301 9.953333854675293 -12.38375282287598 10.47309398651123 -12.92711448669434 11.26060962677002 C -13.4704761505127 12.04812622070312 -13.74215507507324 12.91439437866211 -13.74215507507324 13.85941505432129 L -13.74215507507324 16.50547027587891 Z">
            </path>
            </svg>
                
                <svg className="Path_24" viewBox="0 0 1920 526.819">
            <path id="Path_24" d="M 0 0 L 1920 0 L 1920 526.81884765625 L 0 526.81884765625 L 0 0 Z">
            </path>
            </svg>
                <svg className="Path_93" viewBox="0 0 1920 526.819">
            <path id="Path_93" d="M 0 0 L 1920 0 L 1920 526.81884765625 L 0 526.81884765625 L 0 0 Z">
            </path>
            </svg>
                <svg className="Path_95" viewBox="0 0 1920 361">
            <path id="Path_95" d="M 0 0 L 1920 0 L 1920 361 L 0 361 L 0 0 Z">
            </path>
            </svg>
                <svg className="Rectangle_102">
            <rect id="Rectangle_102" rx="28" ry="28" x="0" y="0" width="375" height="301">
            </rect>
            </svg>
                <svg className="Rectangle_143">
            <rect id="Rectangle_143" rx="28" ry="28" x="0" y="0" width="375" height="301">
            </rect>
            </svg>
                <svg className="Rectangle_144">
            <rect id="Rectangle_144" rx="28" ry="28" x="0" y="0" width="375" height="301">
            </rect>
            </svg>
                <svg className="Rectangle_146">
            <rect id="Rectangle_146" rx="28" ry="28" x="0" y="0" width="375" height="301">
            </rect>
            </svg>

                <svg className="Rectangle_147">
            <rect id="Rectangle_147" rx="28" ry="28" x="0" y="0" width="375" height="301">
            </rect>

            </svg>

                <svg className="Rectangle_145">
            <rect id="Rectangle_145" rx="28" ry="28" x="0" y="0" width="375" height="301">
            </rect>
            </svg>
            
            <img alt="image_pic" id="dog2" src="assets/Images/dog2.png" srcSet="assets/Images/dog2.png 1x, assets/Images/dog2@2x.png 2x"/>

            <img alt="image_pic" id="dog_train" src="assets/Images/dog_train.png" srcSet="assets/Images/dog_train.png 1x, assets/Images/dog_train@2x.png 2x"/>

            {/* Page Menu here */}
            <nav className="navbar navbar-expand-lg navbar-light " >
            {/* id="Dog_Father"  */}
                <div >
                    <span id="Dog_Father"><a href="/"><span text-color="black">Dog Shop</span></a></span>
                </div>

               <div className="collapse navbar-collapse" id="navbarSupportedContent">
                   <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                        {/* id="Todays_Deals" */}
                                <div  >
                                    <a href="/" className="nav-link" id="Todays_Deals">Deals & Discounts</a>
                                </div>
                        </li>
                        <li className="nav-item"> 
                        {/* id="Pets___Services" */}
                                <div >
                                    <a href="/" className="nav-link" id="Pets___Services">Pets  & Services</a>
                                </div>
                        </li>

                        <li className="nav-item">
                        {/* id="Contact_Us" */}
                                <div >
                                    <a href="/" className="nav-link" id="Contact_Us">Contact Us</a>
                                </div>
                        </li>
                   </ul>
               </div>
            </nav>


            <Link to="/">
            <div id="Shop_now">
                <span>Shop now</span>
            </div>
            </Link>
            <Link to="/">
                <div id="Shop_now_">
                    <span>Shop now</span>
                </div>
            </Link>
            <Link to="/">
                <div id="Shop_now_ba">
                    <span>Shop now</span>
                </div>
            </Link>
            <Link to="/">
                <div id="Shop_now_bb">
                    <span>Shop now</span>
                </div>
            </Link>
            <Link to="/">
                <div id="Book_now">
                    <span>Book now</span>
                </div>
            </Link>
            <Link to="/">
                <div id="Book_now_">
                    <span>Book now</span>
                </div>
            </Link>


            <svg className="Rectangle_8">
                <rect id="Rectangle_8" rx="0" ry="0" x="0" y="0" width="358" height="469">
                </rect>
            </svg>

            <img alt="image_pic" id="dogshirt" src="assets/Images/dogshirt.png" srcSet="assets/Images/dogshirt.png 1x, assets/Images/dogshirt@2x.png 2x"/>

            <img alt="image_pic" id="collar" src="assets/Images/collar.png" srcSet="assets/Images/collar.png 1x, assets/Images/collar@2x.png 2x"/>

            <div id="Breeds">
                <span>Breeds</span>
            </div>
            
            <div id="Todays_Deals_bb">
                <a href="/">Deal of The Day</a>
            </div>
            <div id="Accessories">
                <span>Accessories</span>
            </div>
            <div id="Dog_Training">
                <span>Dog Training</span>
            </div>
            <img alt="image_pic" id="lui-peng-ybHtKz5He9Y-unsplash" src="assets/Images/lui-peng-ybHtKz5He9Y-unsplash.png" srcSet="assets/Images/lui-peng-ybHtKz5He9Y-unsplash.png 1x, assets/Images/lui-peng-ybHtKz5He9Y-unsplash@2x.png 2x"/>

            <img alt="image_pic" id="ash-goldsbrough-v0_MCllHY9M-un" src="assets/Images/ash-goldsbrough-v0_MCllHY9M-un.png" srcSet="assets/Images/ash-goldsbrough-v0_MCllHY9M-un.png 1x, assets/Images/ash-goldsbrough-v0_MCllHY9M-un@2x.png 2x"/>

            <svg className="Line_3" viewBox="0 0 198 4">
                <path id="Line_3" d="M 0 0 L 198 0"></path>
            </svg>
            
                <div id="Group_148">
                    <svg className="Rectangle_30">
                    <rect id="Rectangle_30" rx="0" ry="0" x="0" y="0" width="384" height="299">
                    </rect>
                    </svg>
                    <div id="Golden__Retriever__bl">
                        <span>Golden  Retriever</span><br/>
                    </div>
                    <div id="Golden__Retriever__bl">
                        <span>Golden  Retriever</span><br/>
                    </div>
                    <div id="ID100_bn">
                        <span>100</span>
                    </div>
                    <div id="ID100_bn">
                        <span>100</span>
                    </div>
                    <div id="Lorem_ipsum_dolor_sit_amet_con">
                        <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.<br/>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</span>
                    </div>
                    <svg className="Line_4" viewBox="0 0 1 34">
                        <path id="Line_4" d="M 0 0 L 0 34"></path>
                    </svg>
                    <img alt="image_pic" id="Mask_Group_34" src="assets/Images/Mask_Group_34.png" srcSet="assets/Images/Mask_Group_34.png 1x, assets/Images/Mask_Group_34@2x.png 2x"/>
                </div>
                {/* <div id="Group_149">
                    <svg className="Rectangle_30_bs">
                <rect id="Rectangle_30_bs" rx="0" ry="0" x="0" y="0" width="264" height="205">
                </rect>
                </svg>
                    <div id="Blue_Eyes_">
                        <span>Blue Eyes</span><br/>
                    </div>
                    <div id="Lorem_ipsum_dolor_sit_amet_con_bu">
                        <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.<br/>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</span>
                    </div>
                </div> */}
                
                <img alt="image_pic" id="Dogbowl" src="assets/Images/Dogbowl.png" srcSet="assets/Images/Dogbowl.png 1x, assets/Images/Dogbowl@2x.png 2x"/>

                <img alt="image_pic" id="dogtag" src="assets/Images/dogtag.png" srcSet="assets/Images/dogtag.png 1x, assets/Images/dogtag@2x.png 2x"/>

            
            <img alt="image_pic" id="dog2_ck" src="assets/Images/dog2_ck.png" srcSet="assets/Images/dog2_ck.png 1x, assets/Images/dog2_ck@2x.png 2x"/>

            <div id="Foreign">
                <span>Foreign</span>
            </div>
            <div id="Foreign_cm">
                <span>Foreign</span>
            </div>
            <div id="Aerobics">
                <span>Aerobics</span>
            </div>
            <div id="Local">
                <span>Local</span>
            </div>
            <div id="Local_cp">
                <span>Local</span>
            </div>
            <div id="Ethiques">
                <span>Ethiques</span>
            </div>

            <footer className="page-footer">
                    <div id="Group_151">
                        <div id="FOLLOW_US">
                            <span>FOLLOW US</span>
                        </div>
                        <div id="Group_12">
                            <svg className="Rectangle">
                    <rect id="Rectangle" rx="0" ry="0" x="0" y="0" width="28" height="28">
                    </rect>
                    </svg>
                            <a href="/">
                            <svg className="Fill_1" viewBox="0 0 54 51.001">
                    <path id="Fill_1" d="M 30.24051284790039 51.00119781494141 L 30.23733520507812 51.00119781494141 L 18.66232490539551 50.99801254272461 C 18.66318130493164 50.73269653320312 18.81755638122559 19.7780876159668 18.66232490539551 16.58625793457031 L 30.24051284790039 16.58625793457031 L 30.24051284790039 21.46574974060059 C 30.21475219726562 21.50017547607422 30.18619346618652 21.54033470153809 30.16332244873047 21.57475852966309 L 30.24070358276367 21.57475852966309 L 30.24051284790039 21.46565437316895 C 31.98041534423828 18.81771087646484 34.73799896240234 15.78018188476562 40.67231750488281 15.78018188476562 C 44.59384536743164 15.78018188476562 47.88611602783203 17.0870532989502 50.19324111938477 19.5595645904541 C 52.71928787231445 22.26669692993164 54.00009918212891 26.20493698120117 54.00009918212891 31.2648983001709 L 54.00009918212891 50.99482345581055 L 42.42477035522461 50.99801254272461 L 42.42477035522461 32.58732223510742 C 42.42477035522461 29.03828620910645 41.40750885009766 24.80767250061035 36.56134796142578 24.80767250061035 C 33.90986251831055 24.80767250061035 31.69015121459961 26.37118911743164 30.62359237670898 28.9900951385498 C 30.36223220825195 29.62000846862793 30.24051284790039 30.50691604614258 30.24051284790039 31.7812442779541 L 30.24051284790039 50.99801254272461 L 30.24051284790039 51.00119781494141 Z M 12.26144504547119 50.99801254272461 L 12.25826835632324 50.99801254272461 L 0.6889742016792297 50.99801254272461 L 0.6889742016792297 16.58625793457031 L 12.26144504547119 16.58625793457031 L 12.26144504547119 50.99482345581055 L 12.26144504547119 50.99801254272461 Z M 6.475209712982178 11.89322471618652 L 6.398021221160889 11.89322471618652 C 2.690746068954468 11.89322471618652 5.447387820822769e-07 9.39110279083252 5.447387820822769e-07 5.94374418258667 C 5.447387820822769e-07 2.444144487380981 2.694430828094482 -1.388549719649745e-07 6.552397727966309 -1.388549719649745e-07 C 10.34245109558105 -1.388549719649745e-07 12.94349384307861 2.388589382171631 13.02474784851074 5.94374418258667 C 13.02474784851074 9.446721076965332 10.33149242401123 11.89322471618652 6.475209712982178 11.89322471618652 Z">
                    </path>
                    </svg> 
                            </a>
                        </div>

                        {/* Twitter */}
                        <a href="/">
                        <svg className="Fill_1_b" viewBox="0 0 62.502 50.001">
                            <path id="Fill_1_b" d="M 62.50152587890625 5.915952682495117 C 60.20095062255859 6.919759273529053 57.73288726806641 7.600764751434326 55.1394157409668 7.904521942138672 C 57.7872200012207 6.34295654296875 59.81436920166016 3.865559577941895 60.77490234375 0.9230726361274719 C 58.29145812988281 2.369438886642456 55.54942321777344 3.419244766235352 52.62819290161133 3.988671541213989 C 50.28840255737305 1.530720829963684 46.96125030517578 0 43.27039337158203 0 C 36.18960952758789 0 30.44804763793945 5.654037952423096 30.44804763793945 12.6240873336792 C 30.44804763793945 13.61260604858398 30.56147575378418 14.57805633544922 30.78002738952637 15.50166606903076 C 20.12535667419434 14.97408008575439 10.67809295654297 9.947136878967285 4.354681491851807 2.30761456489563 C 3.249398708343506 4.169450283050537 2.620706558227539 6.338798999786377 2.620706558227539 8.654727935791016 C 2.620706558227539 13.03580188751221 4.886148452758789 16.9013614654541 8.322779655456543 19.16297721862793 C 6.221693515777588 19.09377670288086 4.245201587677002 18.5248851776123 2.515448093414307 17.57821083068848 L 2.515448093414307 17.73592376708984 C 2.515448093414307 23.85210037231445 6.936580181121826 28.9565601348877 12.79878711700439 30.11794281005859 C 11.72482299804688 30.40292549133301 10.59189796447754 30.56063842773438 9.420164108276367 30.56063842773438 C 8.592530250549316 30.56063842773438 7.791993141174316 30.47990417480469 7.006843090057373 30.32594680786133 C 8.639235496520996 35.34564971923828 13.3727388381958 38.99583053588867 18.98126411437988 39.09587478637695 C 14.59512710571289 42.4811897277832 9.064764022827148 44.49282455444336 3.057945013046265 44.49282455444336 C 2.023333787918091 44.49282455444336 1.003700971603394 44.43099975585938 0 44.31941986083984 C 5.674975395202637 47.9083137512207 12.41206836700439 50.001220703125 19.65298461914062 50.001220703125 C 43.23893737792969 50.001220703125 56.13140869140625 30.76072883605957 56.13140869140625 14.07407474517822 L 56.08878707885742 12.43968772888184 C 58.60736846923828 10.6701192855835 60.78715896606445 8.446724891662598 62.50152587890625 5.915952682495117 Z">
                            </path>
                    </svg>
                        </a>

                    {/* Facebook */}
                        <div id="Group_14">
                            <a href="/">
                            <svg className="Path" viewBox="0 0 50.956 50.956">
                            <path id="Path" d="M 48.14497756958008 1.302214513998479e-07 L 2.811075925827026 1.302214513998479e-07 C 1.259039282798767 1.302214513998479e-07 1.302214513998479e-07 1.259039282798767 1.302214513998479e-07 2.811075925827026 L 1.302214513998479e-07 48.14497756958008 C 1.302214513998479e-07 49.69913864135742 1.259039282798767 50.9560546875 2.811075925827026 50.9560546875 L 27.21477890014648 50.9560546875 L 27.21477890014648 31.22332191467285 L 20.57138442993164 31.22332191467285 L 20.57138442993164 23.53532791137695 L 27.21477890014648 23.53532791137695 L 27.21477890014648 17.85585021972656 C 27.21477890014648 11.27614974975586 31.23606109619141 7.696487903594971 37.10662460327148 7.696487903594971 C 39.91982269287109 7.696487903594971 42.33811187744141 7.902434349060059 43.04300308227539 7.995853900909424 L 43.04300308227539 14.87492179870605 L 38.96439743041992 14.87492179870605 C 35.77964401245117 14.87492179870605 35.1596794128418 16.40572738647461 35.1596794128418 18.63505363464355 L 35.1596794128418 23.54169845581055 L 42.76911544799805 23.54169845581055 L 41.78184127807617 31.24880218505859 L 35.1596794128418 31.24880218505859 L 35.1596794128418 50.9560546875 L 48.14285659790039 50.9560546875 C 49.69913864135742 50.9560546875 50.9560546875 49.69913864135742 50.9560546875 48.14497756958008 L 50.9560546875 2.811075925827026 C 50.9560546875 1.259039282798767 49.69913864135742 1.302214513998479e-07 48.14497756958008 1.302214513998479e-07">
                            </path>
                            </svg>
                            </a>
                        </div>
                        
                        {/* Instagram */}
                        <a href="/">
                            <img alt="image_pic" id="Mask_Group_1" src="assets/Images/Mask_Group_1.png" srcSet="assets/Images/Mask_Group_1.png 1x, assets/Images/Mask_Group_1@2x.png 2x"/>
                        </a>

                    </div>
                    <div id="Recycling_Help_Help_Center_Con">
                        <span>Help Center<br/>Contact Us<br/>Product Help<br/>Warranty<br/>Order Status</span>
                    </div>
                    <div id="About_Born_in_PC_Protect_Our__">
                        <span>About<br/>Born in PC<br/>Protect Our <br/>Winters<br/>Careers</span><br/>
                    </div>
                    <div id="HEAR_IT_FIRST">
                        <span>HEAR IT FIRST</span>
                    </div>

                    {/* Sign up for emails */}
                    <svg className="Rectangle_28">
                        <Link to="/">
                        <rect id="Rectangle_28" rx="5" ry="5" x="0" y="0" width="453" height="82">
                        </rect></Link>
                    </svg>
                
                    {/* <div id="Group_3">
                        <svg className="Rectangle_cb">
                    <rect id="Rectangle_cb" rx="27.5" ry="27.5" x="0" y="0" width="55" height="55">
                    </rect>
                </svg>
                        <svg className="Path_cc" viewBox="0 0 6 10">
                    <path id="Path_cc" d="M 0.2217216491699219 0 C 0.2784538269042969 0 0.3351864814758301 0.01879501342773438 0.3786220550537109 0.05600261688232422 L 5.935289859771729 4.865315914154053 C 5.976509094238281 4.90137243270874 6 4.95008659362793 6 5.001102924346924 C 6 5.05211877822876 5.976509094238281 5.100833415985107 5.935289859771729 5.136889934539795 L 0.378178596496582 9.943902015686035 C 0.291750431060791 10.01869964599609 0.1512494087219238 10.01869964599609 0.06482124328613281 9.943902015686035 C -0.0216069221496582 9.86910343170166 -0.0216069221496582 9.747509002685547 0.06482124328613281 9.672711372375488 L 5.465031623840332 5.001102924346924 L 0.06482124328613281 0.3275766372680664 C -0.0216069221496582 0.2527790069580078 -0.0216069221496582 0.1311836242675781 0.06482124328613281 0.05638599395751953 C 0.1082568168640137 0.01879501342773438 0.1649889945983887 0 0.2217216491699219 0 Z">
                    </path>
                </svg>
                    </div> */}
                    <div id="Sign_up_for_Emails">
                        <Link>
                            <span>Sign up for Emails</span>
                        </Link>
                    </div>
                    <svg className="Line_5" viewBox="0 0 42.581 2">
                <path id="Line_5" d="M 0 0 L 42.58087539672852 0">
                </path>
                </svg>
                    <svg className="Line_8" viewBox="0 0 42.581 2">
                <path id="Line_8" d="M 0 0 L 42.58087539672852 0">
                </path>
                </svg>
                    <svg className="Line_6" viewBox="0 0 63 2">
                <path id="Line_6" d="M 0 0 L 63 0">
                </path>
                </svg>
                    <svg className="Line_10" viewBox="0 0 63 2">
                <path id="Line_10" d="M 0 0 L 63 0">
                </path>
                </svg>
                    <svg className="Line_7" viewBox="0 0 63 2">
                <path id="Line_7" d="M 0 0 L 63 0">
                </path>
                </svg>
                    <svg className="Line_9" viewBox="0 0 63 2">
                <path id="Line_9" d="M 0 0 L 63 0">
                </path>
                </svg>
            </footer>
        
        </div>
    )
}
}
export default Home; 