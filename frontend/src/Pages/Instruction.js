import { Navbar } from './Components/Navbar';
import { Footer } from './Components/Footer';
import "../css/Instruction.css";


const Instruction = () => {
    
    return (
        <>
        <Navbar />
        <section className='survey-bar'>
            <div className='instruction-container card-shadow'>
                <h2 className='manage-header'>會員使用須知</h2>
                <h3 className='manage-header'>1. 註冊</h3>
                    <p> 
                        利用大專院校的信箱申請註冊為會員，即可填寫問卷參加抽獎，或是發布屬於你的問卷。 <br/>
                        申請時請填寫姓名、學號與連絡信箱，系統會傳送註冊驗證碼到你的信箱，只需填寫驗證碼，即可成為會員。
                    </p>
                <h3 className='manage-header'>2. 填寫問卷 </h3>
                    <p>
                        用戶可以點選感興趣的問卷進行填答，請確實填答所有題目，送出問卷後即取得抽獎資格。 <br/>
                        問卷抽獎時間截止時，系統會在整點進行自動抽獎。用戶可以到「問卷管理」頁面檢視自己填寫過的問卷，會顯示「中獎、未中獎、未抽獎」標籤，即可知道問卷的中獎結果。 <br/>
                        若用戶中獎，待問卷作者點選「寄出中獎通知信」後，系統會寄送中獎通知信到用戶的信箱。 <br/>
                        中獎後，用戶需要依照問卷作者指定的方式，領舉中獎獎品。
                    </p>
                <h3 className='manage-header'>3. 製作問卷 </h3>
                    <p>
                        用戶若有發表問卷的需求，請點選「製作問卷」，依照需求設計自己的問卷。 <br/>
                        設計完畢，請填寫問卷的截止時間、抽獎時間等資訊，並設定獎品數量與內容。 <br/>
                        問卷抽獎時間截止時，系統會在整點進行自動抽獎。製作者請在抽獎後的「一天內」點選「寄出中獎通知信」，系統會自動寄送中獎通知到中獎填寫者的信箱。 <br/>
                        製作者可以修改寄信內容，並指定中獎者領取獎品的方式，可以使用「實體面交」或是「郵寄」等。請確實履行交付義務，未履行的製作者，可能會被檢舉，並遭到停權處置，未來不可再使用本系統。
                    </p>
                <h3 className='manage-header'>4. 檢舉機制</h3>
                    <p>
                        本系統旨在保障抽獎機制的公平性與公開性，因此系統會確保所有問卷都在抽獎截止時間自動進行抽獎，並確保所有會員皆可明確追蹤任何問卷的抽獎進度、是否進行抽獎與各個獎品的中獎用戶。 <br/>
                        在抽獎結束後，系統會自動寄信到中獎者的信箱，提醒中獎者與問卷作者線下進行交付獎品的動作。 <br/>
                        系統無法保證製作者履行交付義務的責任，因此我們設立檢舉機制，保障問卷填答者的使用權益。
                        若中獎用戶無法順利連絡上問卷作者、或問卷作者未確實交付獎品，造成交付義務未履行，中獎人可以寄信至官方信箱檢舉問卷作者。 <br/>
                        信件內文參照如下所示。
                    </p>     
                    <h4> 信件標題： 檢舉問卷製作者 b1234567(帳號) 未履行交付義務 </h4>
                    <h4> 信件內容：</h4>
                        <p>
                            填答者帳號： OOOOOOOO  <br/>
                            問卷標題： FORMALOT 系統使用意見調查表 <br/>
                            填答日期： 2022/4/1 <br/>
                            抽獎日期： 2022/4/12 <br/>
                            檢舉事宜： 我抽中了 AirPods pro 一組，預計於 4/13 至現場與製作者領獎。但到現場時製作者並未抵達，後續都聯絡不上製作者。已經等了一個禮拜都沒有下文。 <br/>
                            中獎通知信：（請附上收到中獎通知信的內文截圖）
                        </p>
                    <p>
                        Formalot 官方收到檢舉信後，會確認檢舉者是否確實為該問卷的中獎者，確認過後，官方會寄送「檢舉通知信」至問卷作者的信箱。 <br/>
                        請問卷作者於3日內來信檢附交付獎品的證明：附上送出獎品的照片、寄送獎品的郵資、照片等可供證明的文件。 <br/>
                        若有其他異議，問卷作者可提出反駁論述，例如中獎者自己忘記錯過領獎時間、中獎者的郵寄地址錯誤等。 <br/>
                        系統官方會依照兩造信件內容，盡可能還原事實，找到中立的解方，並將最後檢舉判定結果回信給兩方。 <br/>
                        若最終官方判斷填答者的檢舉不合理或無效，系統將留下紀錄。若同一填答者有超過3次（含）檢舉無效之紀錄，系統將把填答者的帳號停權，禁止該用戶使用本系統。
                        若問卷製作者未於收到「檢舉通知信」後3日內回信證明，我們會再寄送一封「檢舉通知信」給問卷製作者，若作者仍未於3日內回信，系統將停權該製作者，並禁止該用戶使用本系統。
                        若最終判定問卷作者確實未履行交付義務，我們將把製作者的帳號停權，禁止該用戶使用本系統。 <br/>
                    </p>
            </div>
        </section>
        <Footer/> 
        </>
    )
}

export { Instruction }