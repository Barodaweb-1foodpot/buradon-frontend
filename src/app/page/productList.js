import Hader from '@/Component/Hader'
import React from 'react'
import PlaceHolder from "@/Component/Placeholder"
import Bradcrum from '@/Component/Bradcrum'
import { BiSolidFilePdf } from "react-icons/bi";
import Footer from '@/Component/Footer';
import ScrollTopBtn from '@/Component/ScrollTopBtn';
import BradCrumImg from "@/assets/images/new-home/breadcrumb-product.jpg"


const productList = () => {
  return (
    <React.Fragment>
      <Hader />
      <PlaceHolder />
      <Bradcrum BradCrumProduct={BradCrumImg} Title="Product" />
    <section className="research-page-section sec-pad buradon">
  <div className="auto-container">
    <div className="row">
      <div className="col-lg-12">
        <div className="sec-title small">
          {/* <span class="sub-title">About Company</span> */}
          <h2>Filter Products  <span className="hightlight">Alphabetically</span></h2>
        </div>
      </div>
    </div>
    <div className="sortable-masonry">
      <div className="filters centred">
        <ul className="filter-tabs filter-btns clearfix">
          <li className="active filter" data-role="button" data-filter=".all"><i className="fa-solid fa-flask pe-1" /> All</li>
          <li className="filter" data-role="button" data-filter=".a">A</li>
          <li className="filter" data-role="button" data-filter=".b">B</li>
          <li className="filter" data-role="button" data-filter=".c">C</li>
          <li className="filter" data-role="button" data-filter=".d">D</li>
          <li className="filter" data-role="button" data-filter=".e">E</li>
          <li className="filter" data-role="button" data-filter=".f">F</li>
          <li className="filter" data-role="button" data-filter=".g">G</li>
          <li className="filter" data-role="button" data-filter=".h">H</li>
          <li className="filter" data-role="button" data-filter=".i">I</li>
          <li className="filter" data-role="button" data-filter=".j">J</li>
          <li className="filter" data-role="button" data-filter=".k">K</li>
          <li className="filter" data-role="button" data-filter=".l">L</li>
          <li className="filter" data-role="button" data-filter=".m">M</li>
          <li className="filter" data-role="button" data-filter=".n">N</li>
          <li className="filter" data-role="button" data-filter=".o">O</li>
          <li className="filter" data-role="button" data-filter=".p">P</li>
          <li className="filter" data-role="button" data-filter=".q">Q</li>
          <li className="filter" data-role="button" data-filter=".r">R</li>
          <li className="filter" data-role="button" data-filter=".s">S</li>
          <li className="filter" data-role="button" data-filter=".t">T</li>
          <li className="filter" data-role="button" data-filter=".u">U</li>
          <li className="filter" data-role="button" data-filter=".v">V</li>
          <li className="filter" data-role="button" data-filter=".w">W</li>
          <li className="filter" data-role="button" data-filter=".x">X</li>
          <li className="filter" data-role="button" data-filter=".y">Y</li>
          <li className="filter" data-role="button" data-filter=".z">Z</li>
        </ul>
      </div>
      <div className="items-container row clearfix">
        <div className="col-lg-12 col-md-6 col-sm-12 masonry-item small-column all">
          <div className="container table-responsive"> 
            <table className="table table-bordered table-hover buradon-prod-table">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Code</th>
                  <th scope="col">Name</th>
                  <th scope="col">CAS No.</th>
                  <th scope="col">AR / ACS</th>
                  <th scope="col">LR</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td scope="row">Code Here</td>
                  <td>Aluminum ammonium sulfate LR</td>
                  <td>CAS No. Here</td>
                  <td className="pdf"><div className="pdf-icon"> <a href="#"><BiSolidFilePdf className="fas fa-file-pdf" /> View</a></div></td>
                  <td className="pdf"><div className="pdf-icon"> <a href="#"><BiSolidFilePdf className="fas fa-file-pdf" /> View</a></div></td>
                </tr>
                <tr>
                  <td scope="row">Code Here</td>
                  <td>Barium acetate</td>
                  <td>CAS No. Here</td>
                  <td className="pdf"><div className="pdf-icon"> <a href="#"><BiSolidFilePdf className="fas fa-file-pdf" /> View</a></div></td>
                  <td className="pdf"><div className="pdf-icon"> <a href="#"><BiSolidFilePdf className="fas fa-file-pdf" /> View</a></div></td>
                </tr>
                <tr>
                  <td scope="row">Code Here</td>
                  <td>Cadmium acetate</td>
                  <td>CAS No. Here</td>
                  <td className="pdf"><div className="pdf-icon"> <a href="#"><BiSolidFilePdf className="fas fa-file-pdf" /> View</a></div></td>
                  <td className="pdf"><div className="pdf-icon"> <a href="#"><BiSolidFilePdf className="fas fa-file-pdf" /> View</a></div></td>
                </tr>
                <tr>
                  <td scope="row">Code Here</td>
                  <td>DEXTROSE Anhydrous</td>
                  <td>CAS No. Here</td>
                  <td className="pdf"><div className="pdf-icon"> <a href="#"><BiSolidFilePdf className="fas fa-file-pdf" /> View</a></div></td>
                  <td className="pdf"><div className="pdf-icon"> <a href="#"><BiSolidFilePdf className="fas fa-file-pdf" /> View</a></div></td>
                </tr>
                <tr>
                  <td scope="row">Code Here</td>
                  <td>EDTA acid</td>
                  <td>CAS No. Here</td>
                  <td className="pdf"><div className="pdf-icon"> <a href="#"><BiSolidFilePdf className="fas fa-file-pdf" /> View</a></div></td>
                  <td className="pdf"><div className="pdf-icon"> <a href="#"><BiSolidFilePdf className="fas fa-file-pdf" /> View</a></div></td>
                </tr>
                <tr>
                  <td scope="row">Code Here</td>
                  <td>Ferric chloride anhydrous</td>
                  <td>CAS No. Here</td>
                  <td className="pdf"><div className="pdf-icon"> <a href="#"><BiSolidFilePdf className="fas fa-file-pdf" /> View</a></div></td>
                  <td className="pdf"><div className="pdf-icon"> <a href="#"><BiSolidFilePdf className="fas fa-file-pdf" /> View</a></div></td>
                </tr>
                <tr>
                  <td scope="row">Code Here</td>
                  <td>Hexamine</td>
                  <td>CAS No. Here</td>
                  <td className="pdf"><div className="pdf-icon"> <a href="#"><BiSolidFilePdf className="fas fa-file-pdf" /> View</a></div></td>
                  <td className="pdf"><div className="pdf-icon"> <a href="#"><BiSolidFilePdf className="fas fa-file-pdf" /> View</a></div></td>
                </tr>
                <tr>
                  <td scope="row">Code Here</td>
                  <td>Lead acetate</td>
                  <td>CAS No. Here</td>
                  <td className="pdf"><div className="pdf-icon"> <a href="#"><BiSolidFilePdf className="fas fa-file-pdf" /> View</a></div></td>
                  <td className="pdf"><div className="pdf-icon"> <a href="#"><BiSolidFilePdf className="fas fa-file-pdf" /> View</a></div></td>
                </tr>
                <tr>
                  <td scope="row">Code Here</td>
                  <td>Magnesium</td>
                  <td>CAS No. Here</td>
                  <td className="pdf"><div className="pdf-icon"> <a href="#"><BiSolidFilePdf className="fas fa-file-pdf" /> View</a></div></td>
                  <td className="pdf"><div className="pdf-icon"> <a href="#"><BiSolidFilePdf className="fas fa-file-pdf" /> View</a></div></td>
                </tr>
                <tr>
                  <td scope="row">Code Here</td>
                  <td>Nickel carbonate (Basic)</td>
                  <td>CAS No. Here</td>
                  <td className="pdf"><div className="pdf-icon"> <a href="#"><BiSolidFilePdf className="fas fa-file-pdf" /> View</a></div></td>
                  <td className="pdf"><div className="pdf-icon"> <a href="#"><BiSolidFilePdf className="fas fa-file-pdf" /> View</a></div></td>
                </tr>
                <tr>
                  <td scope="row">Code Here</td>
                  <td>Oxalic acid</td>
                  <td>CAS No. Here</td>
                  <td className="pdf"><div className="pdf-icon"> <a href="#"><BiSolidFilePdf className="fas fa-file-pdf" /> View</a></div></td>
                  <td className="pdf"><div className="pdf-icon"> <a href="#"><BiSolidFilePdf className="fas fa-file-pdf" /> View</a></div></td>
                </tr>
                <tr>
                  <td scope="row">Code Here</td>
                  <td>Phenol Crystal</td>
                  <td>CAS No. Here</td>
                  <td className="pdf"><div className="pdf-icon"> <a href="#"><BiSolidFilePdf className="fas fa-file-pdf" /> View</a></div></td>
                  <td className="pdf"><div className="pdf-icon"> <a href="#"><BiSolidFilePdf className="fas fa-file-pdf" /> View</a></div></td>
                </tr>
                <tr>
                  <td scope="row">Code Here</td>
                  <td>Sodium benzoate</td>
                  <td>CAS No. Here</td>
                  <td className="pdf"><div className="pdf-icon"> <a href="#"><BiSolidFilePdf className="fas fa-file-pdf" /> View</a></div></td>
                  <td className="pdf"><div className="pdf-icon"> <a href="#"><BiSolidFilePdf className="fas fa-file-pdf" /> View</a></div></td>
                </tr>
                <tr>
                  <td scope="row">Code Here</td>
                  <td>Tin chloride</td>
                  <td>CAS No. Here</td>
                  <td className="pdf"><div className="pdf-icon"> <a href="#"><BiSolidFilePdf className="fas fa-file-pdf" /> View</a></div></td>
                  <td className="pdf"><div className="pdf-icon"> <a href="#"><BiSolidFilePdf className="fas fa-file-pdf" /> View</a></div></td>
                </tr>
                <tr>
                  <td scope="row">Code Here</td>
                  <td>Urea</td>
                  <td>CAS No. Here</td>
                  <td className="pdf"><div className="pdf-icon"> <a href="#"><BiSolidFilePdf className="fas fa-file-pdf" /> View</a></div></td>
                  <td className="pdf"><div className="pdf-icon"> <a href="#"><BiSolidFilePdf className="fas fa-file-pdf" /> View</a></div></td>
                </tr>
                <tr>
                  <td scope="row">Code Here</td>
                  <td>Zinc acetate</td>
                  <td>CAS No. Here</td>
                  <td className="pdf"><div className="pdf-icon"> <a href="#"><BiSolidFilePdf className="fas fa-file-pdf" /> View</a></div></td>
                  <td className="pdf"><div className="pdf-icon"> <a href="#"><BiSolidFilePdf className="fas fa-file-pdf" /> View</a></div></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      
      </div>
    </div>
  </div>
</section>
<ScrollTopBtn />
<Footer />
    </React.Fragment>
  )
}

export default productList