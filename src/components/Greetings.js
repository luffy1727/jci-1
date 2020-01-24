/*eslint-disable*/
import React from "react";

// reactstrap components
import {
  Button,
  Container,
  Row,
  Col
} from "reactstrap";

function Greetings() {
  return (
    <div id="about-us" className="section section-about-us">
        <Container>
            <Row>
                <Col className="ml-auto mr-auto text-center" md="8">
                    <h2 className="title">2020 ОНЫ ЕРӨНХИЙЛӨГЧИЙН МЭНДЧИЛГЭЭ</h2>
                </Col>
            </Row>
            <div className="separator separator-primary"></div>
            <div className="section-story-overview">
                <Row>
                <Col md="5">
                    <div
                    className="greetings-image-container"
                    style={{
                        backgroundImage:
                        "url(" + require("assets/img/landing-page.jpg") + ")"
                    }}
                    >
                    </div>
                </Col>
                <Col md="5">
                    <p>
                    2020 он. Шинэ жаран, шинэ арваны эхлэл. Технологийн хөгжил асар хурдтай явагдаж, хүн робот хоёр зэрэгцэн ажиллах, орших шинэ эрин бидний өмнө ирээд байна. Бидний мэдэх ажлын байрууд устаж, хиймэл оюун ухаанд байраа тавьж өгөх болоод байгаа энэ цаг үеийг цахим шилжилтийн үе гэж тодорхойлж байна.
                    <br></br><br></br>Залуус бид үүнийг мэдлэг шилжиж буй цаг үе гэж хүлээн авч, өөрсдийгөө олон талаар хөгжүүлж, бусдад ч гэрэлтэй сайн сайхныг түгээх, нийтээрээ урагшлан хөгжих эрин үе болгох учиртай.
                    <br></br><br></br>Манай дэлхий 2030 он хүртэлх Хөгжлийн зорилгоо тогтоож, тогтвортойгоор урагшлахаар НҮБ-ын гишүүн 193 орон нэгдсэн байдаг. Монгол улс өөрийн “Тогтвортой хөгжлийн үзэл баримтлал”-аа баталж “Тогтвортой Хөгжлийн 17 зорилго”-ыг ханган ажиллахаа хүн ардынхаа өмнө төдийгүй, дэлхий нийтэд тунхагласан байдаг.
                    </p>
                </Col>
                </Row>
            </div>
            <div className="">
                <Row>
                    <Col md="5">
                        <p>
                            Jaycee-чүүд бид Тогтвортой хөгжлийн зорилгуудыг нийгэмд сурталчилахад манлайлан ажиллаж, түгээн дэлгэрүүлэхэд өөрсдийн төсөл хөтөлбөрөө чиглүүлдэг.
                        </p>
                    </Col>
                    <Col md="5">
                        <p>
                            2020 онд бид олон улсын болон бизнесийн хамтын ажиллагааг дэмжиж, хөгжүүлж, гишүүдээ дэмжин ажиллана. Улмаар хамтран ажиллах байгууллагууд, спонсоруудын хамтын зорилгод нийцүүлэн нийгэм, олон нийтэд хандсан 4 төсөл хөтөлбөрөөр дамжуулан ТХЗ-ыг сурталчилж, шууд болон олон нийтийн хэрэгслээр 1,500,000 гаруй хүнд хүрч ажиллахаар төлөвлөж байна.
                        </p>
                    </Col>
                </Row>
                
                <Col className="ml-auto mr-auto text-center pad-top" md="8">
                    <p>
                        Бид хамтдаа хийж хэрэгжүүлж буй ажлынхаа гол бүр байж чадна. <br></br><br></br>
                        Залуус бидэнд ирээдүйг бүтээх эрх нь үүрэг хариуцлагатайгаа бий. <br></br><br></br>

                        Б.МӨНХТУГ <br></br>
                        2020 оны Ерөнхийлөгч <br></br>
                        JCI Централ,

                    </p>
            </Col>
            </div>
        </Container>
    </div>
  );
}

export default Greetings;