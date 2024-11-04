import "./hero.scss";

export default function Hero() {
  return (
    <section className="hero">
      <img src="/online.svg" alt="Описание" className="hero_image" />

      <h1 className="hero_title">
        ПРОГРАММИРОВАНИЕ <br /> для детей
      </h1>
      <p className="hero_course">Scratch</p>
      <button className="hero_cta">ЗАПИСАТЬСЯ НА ЗАНЯТИЕ</button>
      <div className="hero_subline-box">
        <div className="hero_subtext">
          <p className="subtext_description-text">
            Mы рaды пpедcтaвить вaм нашу шкoлу, гдe кaждый peбeнок наxoдит cвoй
            путь к увлeкатeльнoму и познaвaтeльному обучению чeрeз практику,
            затoчeнную под игровoй фopмaт и захвaтывaющие интeрaктивы.
          </p>
          <p className="subtext_mission-text">
            <b>Наша миссия</b> – вдохновить детей на великие мечты и помочь им
            освоить навыки, необходимые для успешного будущего.
          </p>
        </div>
        <img className="subline_img" src="/slide.png" alt="" />
      </div>
    </section>
  );
}
