import React from 'react'
import "./Footer.css"
import AddIcon from '@material-ui/icons/Add';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
function Footer() {
  return (
    <div className='foot'>
        <div className='line2'></div>
        <div className='who-are'>
            <h1>Who are we?</h1>
            <p>loremsid dicj saidjcd aioedj Although paraphrases likely abounded in oral traditions, paraphrasing as a specific educational exercise dates back to at least Roman times, when the author Quintilian recommended it for students to develop dexterity in language. In the Middle Ages, this tradition continued, with authors such as Geoffrey of Vinsauf developing schoolroom exercises that included both rhetorical manipulations and paraphrasing as a way of generating poems and speeches. Paraphrasing seems to have dropped off as a specific exercise that students learn, a drop off that largely coincides with the removal of Classical texts from the core of Western education. There is, however, renewed interest in the study of paraphrases, giv
            </p>
        </div>
        <div className='line3'></div>
        <div className='who-are1'>
            <h1>Our Mission</h1>
            <p>loremsid dicj saidjcd aioedj Although paraphrases likely abounded in oral traditions, paraphrasing as a specific educational exercise dates back to at least Roman times, when the author Quintilian recommended it for students to develop dexterity in language. In the Middle Ages, this tradition continued, with authors such as Geoffrey of Vinsauf developing schoolroom exercises that included both rhetorical manipulations and paraphrasing as a way of generating poems and speeches. Paraphrasing seems to have dropped off as a specific exercise that students learn, a drop off that largely coincides with the removal of Classical texts from the core of Western education. There is, however, renewed interest in the study of paraphrases, giv
            </p>
        </div>


        <div className='freq'>
          <h1><u>Frequently asked question</u></h1>

          <select className="languages" name="languages">
    <option>Select Language</option>
    <option value="af">Afrikaans</option>
    <option value="sq">Albanian - shqip</option>
    <option value="am">Amharic - ????????????</option>
    <option value="ar">Arabic - ??????????????</option>
    <option value="an">Aragonese - aragon??s</option>
    <option value="hy">Armenian - ??????????????</option>
    <option value="ast">Asturian - asturianu</option>
    <option value="az">Azerbaijani - az??rbaycan dili</option>
    <option value="eu">Basque - euskara</option>
    <option value="be">Belarusian - ????????????????????</option>
    <option value="bn">Bengali - ???????????????</option>
    <option value="bs">Bosnian - bosanski</option>
    <option value="br">Breton - brezhoneg</option>
    <option value="bg">Bulgarian - ??????????????????</option>
    <option value="ca">Catalan - catal??</option>
    <option value="ckb">Central Kurdish - ?????????? (???????????????? ????????????)</option>
    <option value="zh">Chinese - ??????</option>
    <option value="zh-HK">Chinese (Hong Kong) - ??????????????????</option>
    <option value="zh-CN">Chinese (Simplified) - ??????????????????</option>
    <option value="zh-TW">Chinese (Traditional) - ??????????????????</option>
    <option value="co">Corsican</option>
    <option value="hr">Croatian - hrvatski</option>
    <option value="cs">Czech - ??e??tina</option>
    <option value="da">Danish - dansk</option>
    <option value="nl">Dutch - Nederlands</option>
    <option value="en">English</option>
    <option value="en-AU">English (Australia)</option>
    <option value="en-CA">English (Canada)</option>
    <option value="en-IN">English (India)</option>
    <option value="en-NZ">English (New Zealand)</option>
    <option value="en-ZA">English (South Africa)</option>
    <option value="en-GB">English (United Kingdom)</option>
    <option value="en-US">English (United States)</option>
    <option value="eo">Esperanto - esperanto</option>
    <option value="et">Estonian - eesti</option>
    <option value="fo">Faroese - f??royskt</option>
    <option value="fil">Filipino</option>
    <option value="fi">Finnish - suomi</option>
    <option value="fr">French - fran??ais</option>
    <option value="fr-CA">French (Canada) - fran??ais (Canada)</option>
    <option value="fr-FR">French (France) - fran??ais (France)</option>
    <option value="fr-CH">French (Switzerland) - fran??ais (Suisse)</option>
    <option value="gl">Galician - galego</option>
    <option value="ka">Georgian - ?????????????????????</option>
    <option value="de">German - Deutsch</option>
    <option value="de-AT">German (Austria) - Deutsch (??sterreich)</option>
    <option value="de-DE">German (Germany) - Deutsch (Deutschland)</option>
    <option value="de-LI">German (Liechtenstein) - Deutsch (Liechtenstein)</option>
    <option value="de-CH">German (Switzerland) - Deutsch (Schweiz)</option>
    <option value="el">Greek - ????????????????</option>
    <option value="gn">Guarani</option>
    <option value="gu">Gujarati - ?????????????????????</option>
    <option value="ha">Hausa</option>
    <option value="haw">Hawaiian - ????lelo Hawai??i</option>
    <option value="he">Hebrew - ??????????</option>
    <option value="hi">Hindi - ??????????????????</option>
    <option value="hu">Hungarian - magyar</option>
    <option value="is">Icelandic - ??slenska</option>
    <option value="id">Indonesian - Indonesia</option>
    <option value="ia">Interlingua</option>
    <option value="ga">Irish - Gaeilge</option>
    <option value="it">Italian - italiano</option>
    <option value="it-IT">Italian (Italy) - italiano (Italia)</option>
    <option value="it-CH">Italian (Switzerland) - italiano (Svizzera)</option>
    <option value="ja">Japanese - ?????????</option>
    <option value="kn">Kannada - ???????????????</option>
    <option value="kk">Kazakh - ?????????? ????????</option>
    <option value="km">Khmer - ???????????????</option>
    <option value="ko">Korean - ?????????</option>
    <option value="ku">Kurdish - Kurd??</option>
    <option value="ky">Kyrgyz - ????????????????</option>
    <option value="lo">Lao - ?????????</option>
    <option value="la">Latin</option>
    <option value="lv">Latvian - latvie??u</option>
    <option value="ln">Lingala - ling??la</option>
    <option value="lt">Lithuanian - lietuvi??</option>
    <option value="mk">Macedonian - ????????????????????</option>
    <option value="ms">Malay - Bahasa Melayu</option>
    <option value="ml">Malayalam - ??????????????????</option>
    <option value="mt">Maltese - Malti</option>
    <option value="mr">Marathi - ???????????????</option>
    <option value="mn">Mongolian - ????????????</option>
    <option value="ne">Nepali - ??????????????????</option>
    <option value="no">Norwegian - norsk</option>
    <option value="nb">Norwegian Bokm??l - norsk bokm??l</option>
    <option value="nn">Norwegian Nynorsk - nynorsk</option>
    <option value="oc">Occitan</option>
    <option value="or">Oriya - ???????????????</option>
    <option value="om">Oromo - Oromoo</option>
    <option value="ps">Pashto - ????????</option>
    <option value="fa">Persian - ??????????</option>
    <option value="pl">Polish - polski</option>
    <option value="pt">Portuguese - portugu??s</option>
    <option value="pt-BR">Portuguese (Brazil) - portugu??s (Brasil)</option>
    <option value="pt-PT">Portuguese (Portugal) - portugu??s (Portugal)</option>
    <option value="pa">Punjabi - ??????????????????</option>
    <option value="qu">Quechua</option>
    <option value="ro">Romanian - rom??n??</option>
    <option value="mo">Romanian (Moldova) - rom??n?? (Moldova)</option>
    <option value="rm">Romansh - rumantsch</option>
    <option value="ru">Russian - ??????????????</option>
    <option value="gd">Scottish Gaelic</option>
    <option value="sr">Serbian - ????????????</option>
    <option value="sh">Serbo-Croatian - Srpskohrvatski</option>
    <option value="sn">Shona - chiShona</option>
    <option value="sd">Sindhi</option>
    <option value="si">Sinhala - ???????????????</option>
    <option value="sk">Slovak - sloven??ina</option>
    <option value="sl">Slovenian - sloven????ina</option>
    <option value="so">Somali - Soomaali</option>
    <option value="st">Southern Sotho</option>
    <option value="es">Spanish - espa??ol</option>
    <option value="es-AR">Spanish (Argentina) - espa??ol (Argentina)</option>
    <option value="es-419">Spanish (Latin America) - espa??ol (Latinoam??rica)</option>
    <option value="es-MX">Spanish (Mexico) - espa??ol (M??xico)</option>
    <option value="es-ES">Spanish (Spain) - espa??ol (Espa??a)</option>
    <option value="es-US">Spanish (United States) - espa??ol (Estados Unidos)</option>
    <option value="su">Sundanese</option>
    <option value="sw">Swahili - Kiswahili</option>
    <option value="sv">Swedish - svenska</option>
    <option value="tg">Tajik - ????????????</option>
    <option value="ta">Tamil - ???????????????</option>
    <option value="tt">Tatar</option>
    <option value="te">Telugu - ??????????????????</option>
    <option value="th">Thai - ?????????</option>
    <option value="ti">Tigrinya - ????????????</option>
    <option value="to">Tongan - lea fakatonga</option>
    <option value="tr">Turkish - T??rk??e</option>
    <option value="tk">Turkmen</option>
    <option value="tw">Twi</option>
    <option value="uk">Ukrainian - ????????????????????</option>
    <option value="ur">Urdu - ????????</option>
    <option value="ug">Uyghur</option>
    <option value="uz">Uzbek - o???zbek</option>
    <option value="vi">Vietnamese - Ti???ng Vi???t</option>
    <option value="wa">Walloon - wa</option>
    <option value="cy">Welsh - Cymraeg</option>
    <option value="fy">Western Frisian</option>
    <option value="xh">Xhosa</option>
    <option value="yi">Yiddish</option>
    <option value="yo">Yoruba - ??d?? Yor??b??</option>
    <option value="zu">Zulu - isiZulu</option>
</select>
        </div>
      

      <div className='about1'>
        <h1>How is Liveasy helpful?</h1>
        <AddIcon />
      </div>
      <div className='under'> </div>

      <div className='about2'>
        <h1>What service does Liveasy provide?</h1>
        <AddIcon />
      </div>
      <div className='under1'> </div>


      <div className='about3'>
        <h1>What are the online payment term?</h1>
        <AddIcon />
      </div>
      <div className='under3'></div>

      <div className='liveasy'>
        <h1>Liveasy</h1>
        <button><u>Download our App</u></button>
      </div>

      <div className='footer-list'>
        <ul className='ul1'>
          <li className='ul1-li1' >Why choose us?</li>
          <li className='ul1-li2'>How it works</li>
          <li className='ul1-li3'>Contact us</li>
        </ul>
        <ul className='ul2'>
          <li className='ul2-li1'>About us</li>
          <li className='ul2-li2'> Careers</li>
          <li className='ul2-li3'>Our jurney</li>
          <li className='ul2-li4'>Blog</li>
        </ul>
        <ul className='ul3'>
          <li className='ul3-li1'>Services</li>
          <li className='ul3-li2'>Transport Service</li>
          <li className='ul3-li3'>GPS Service</li>
        </ul>
        <ul className='ul4'>
          <li className='ul4-li1'>Other</li>
          <li>Term & condition</li>
          <li>Privacy policy</li>
          <li>Payment Terms</li>
        </ul>
      </div>
      <div className='last-line'></div>

      <div className='icons'>
        <InstagramIcon  style={{ fontSize: 40}} className="instagram" />
        <LinkedInIcon style={{ fontSize: 40 }} className="linked" />
        <TwitterIcon style={{ fontSize: 40 }}className="twitter" />
        <FacebookIcon style={{ fontSize: 40 }} className="facebook" />

      </div>
    </div>
  )
}

export default Footer
