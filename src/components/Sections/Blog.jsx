import React from "react";
import styled from "styled-components";
// Components
import BlogBox from "../Elements/BlogBox";
import FullButton from "../Buttons/FullButton";
import TestimonialSlider from "../Elements/TestimonialSlider";

export default function Blog() {
  return (
    <Wrapper id="blog">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Nasze historie na blogu</h1>
            <p className="font13">
            Odkryj inspirujące historie, porady i nowinki ze świata marketingu i designu. Na naszym blogu dzielimy się wiedzą i doświadczeniem, które pomogą Twojej marce rozwijać się w cyfrowym świecie.
  <br />
  Zapraszamy do lektury, aby być na bieżąco z najnowszymi trendami i strategiami!
            </p>
          </HeaderInfo>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Nowe biuro!"
                text="Otworzyliśmy nowe biuro, które pozwoli nam rozwijać nasze usługi i lepiej odpowiadać na potrzeby klientów."
                tag="company"
                author="Luke Skywalker, 2 dni temu"
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="5 trendów w marketingu na 2024 rok"
                text="5 trendów w marketingu na 2024 rok5 trendów w marketingu na 2024 rok"
                tag="marketing"
                author="Piotr Zając, 5 dni temu"
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Jak stworzyć skuteczną stronę internetową"
                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                tag="web design"
                author="Piotr Zając, tydzień temu"
                action={() => alert("clicked")}
              />
            </div>
          </div>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Współpraca z influencerami – co warto wiedzieć?"
                text="Dowiedz się, jak efektywnie współpracować z influencerami, aby osiągnąć sukces w kampaniach marketingowych."
                tag="influencer marketing"
                author="Kasia Kowalska, 3 dni temu"
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Jak optymalizować kampanie Google Ads?"
                text="Kilka sprawdzonych metod na zwiększenie skuteczności kampanii reklamowych w Google Ads."
                tag="PPC"
                author="Aleksandra Wiśniewska, 6 dni temu"
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Znaczenie UX w projektowaniu stron"
                text="Dlaczego User Experience ma kluczowe znaczenie dla sukcesu Twojej strony internetowej?"
                tag="UX design"
                author="Michał Nowicki, 4 dni temu"
                action={() => alert("clicked")}
              />
            </div>
          </div>
          <div className="row flexCenter">
            <div style={{ margin: "50px 0", width: "200px" }}>
              <FullButton title="Load More" action={() => alert("clicked")} />
            </div>
          </div>
        </div>
      </div>
      <div className="lightBg" style={{padding: '50px 0'}}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Co mówią?</h1>
            <p className="font13">
            "Nasze usługi są dostosowane do Twoich potrzeb, by pomóc Twojej marce rozwijać się w dynamicznym świecie online. 
<br />
Dążymy do tego, aby każdy projekt był unikalny i odpowiadał na indywidualne wyzwania oraz cele naszych klientów."
            </p>
          </HeaderInfo>
          <TestimonialSlider />
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding-top: 20px;
`;
const HeaderInfo = styled.div`
  margin-bottom: 30px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;