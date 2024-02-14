interface ZohoFormServiceProps {
	service: string;
}

const ZohoFormService: React.FC<ZohoFormServiceProps> = ({ service }) => {
	const zohoFormCode = `
	  <div class="zf-templateWidth"><form action='https://forms.zohopublic.in/safeledgerprivatelimited/form/OrganicServicePageGeneric2023/formperma/cfr51VFyH-7sM07DJajzJVQYf-w0WmSNzfowWiS4sWQ/htmlRecords/submit' name='form' method='POST' accept-charset='UTF-8' enctype='multipart/form-data' id='form'>
	  <input type="hidden" name="zf_referrer_name" value=""><!-- To Track referrals , place the referrer name within the " " in the above hidden input field -->
	  
  <input type="hidden" name="zf_redirect_url" value=""><!-- To redirect to a specific page after record submission , place the respective url within the " " in the above hidden input field -->
  <input type="hidden" name="zc_gad" value=""><!-- If GCLID is enabled in Zoho CRM Integration, click details of AdWords Ads will be pushed to Zoho CRM -->
  <input type="hidden" name="utm_source" value=""/>
  <input type="hidden" name="utm_medium" value=""/>
  <input type="hidden" name="utm_campaign" value=""/>
  <input type="hidden" name="utm_term" value=""/>
  <input type="hidden" name="utm_content" value=""/>
  <div class="zf-templateWrapper">
  
  <!---------template Header Starts Here---------->
  
  
  <!---------template Header Ends Here---------->
  
  <!---------template Container Starts Here---------->
  <div class="zf-subContWrap zf-topAlign"><ul class='ul'>
  
  <!---------Single Line Starts Here---------->
  <li class="zf-tempFrmWrapper zf-large"><h3 class='zf-formHeading'>Submit your Details to get an Instant <span class='highlightedHeadingText'>All-inclusive</span> Quote to your email and a <span class='highlightedHeadingText'>FREE</span> Expert consultation</h3>
  
  <!------<label class="zf-labelName"> 
  Name 
  <em class="zf-important">*</em>
  </label>------->
  
  <div class="zf-tempContDiv">
  <span> 
  <input type="text" class='fieldBgColor' name="SingleLine" checktype="c1" value="" maxlength="255" fieldType=1 placeholder="Full Name" required/></span> <p id="SingleLine_error" class="zf-errorMessage" style="display:none;">Invalid value</p>
  </div><div class="zf-clearBoth"></div></li><!---------Single Line Ends Here---------->
  <!---------Email Starts Here---------->  
  
  <li class="zf-tempFrmWrapper zf-large">
  
  <!------<label class="zf-labelName"> 
  Email 
  <em class="zf-important">*</em>
  </label>---->
  <div class="zf-tempContDiv">
  <span> <input fieldType=9  type="email" maxlength="255" name="Email" checktype="c5" value="" placeholder="Enter Your Email" required/></span> <p id="Email_error" class="zf-errorMessage" style="display:none;">Invalid value</p>
  </div><div class="zf-clearBoth"></div></li><!---------Email Ends Here---------->  
  
  <!---------Phone Starts Here----------> 
  <li  class="zf-tempFrmWrapper zf-large">
  <!---------<label class="zf-labelName"> 
  Phone 
  <em class="zf-important">*</em>
  </label>------->
  <div class="zf-tempContDiv zf-phonefld">
  <div
  class="zf-phwrapper"   
  >
  <span>
  <select class="zf-form-sBox" name="PhoneNumber_countrycodeval" checktype="c7" required>
  <option data-countryCode="IN" value="+91">IN (+91)</option>
  <option data-countryCode="DZ" value="+213">DZ (+213)</option>
  <option data-countryCode="AD" value="+376">AD (+376)</option>
  <option data-countryCode="AO" value="+244">AO (+244)</option>
  <option data-countryCode="AI" value="+1264">AI (+1264)</option>
  <option data-countryCode="AG" value="+1268">AG (+1268)</option>
  <option data-countryCode="AR" value="+54">AR (+54)</option>
  <option data-countryCode="AM" value="+374">AM (+374)</option>
  <option data-countryCode="AW" value="+297">AW (+297)</option>
  <option data-countryCode="AU" value="+61">AU (+61)</option>
  <option data-countryCode="AT" value="+43">AT (+43)</option>
  <option data-countryCode="AZ" value="+994">AZ (+994)</option>
  <option data-countryCode="BS" value="+1242">BS (+1242)</option>
  <option data-countryCode="BH" value="+973">BH (+973)</option>
  <option data-countryCode="BD" value="+880">BD (+880)</option>
  <option data-countryCode="BB" value="+1246">BB (+1246)</option>
  <option data-countryCode="BY" value="+375">BY (+375)</option>
  <option data-countryCode="BE" value="+32">BE (+32)</option>
  <option data-countryCode="BZ" value="+501">BZ (+501)</option>
  <option data-countryCode="BJ" value="+229">BJ (+229)</option>
  <option data-countryCode="BM" value="+1441">BM (+1441)</option>
  <option data-countryCode="BT" value="+975">BT (+975)</option>
  <option data-countryCode="BO" value="+591">BO (+591)</option>
  <option data-countryCode="BA" value="+387">BA (+387)</option>
  <option data-countryCode="BW" value="+267">BW (+267)</option>
  <option data-countryCode="BR" value="+55">BR (+55)</option>
  <option data-countryCode="BN" value="+673">BN (+673)</option>
  <option data-countryCode="BG" value="+359">BG (+359)</option>
  <option data-countryCode="BF" value="+226">BF (+226)</option>
  <option data-countryCode="BI" value="+257">BI (+257)</option>
  <option data-countryCode="KH" value="+855">KH (+855)</option>
  <option data-countryCode="CM" value="+237">CM (+237)</option>
  <option data-countryCode="CA" value="+1">CA (+1)</option>
  <option data-countryCode="CV" value="+238">CV (+238)</option>
  <option data-countryCode="KY" value="+1345">KY (+1345)</option>
  <option data-countryCode="CF" value="+236">CF (+236)</option>
  <option data-countryCode="CL" value="+56">CL (+56)</option>
  <option data-countryCode="CN" value="+86">CN (+86)</option>
  <option data-countryCode="CO" value="+57">CO (+57)</option>
  <option data-countryCode="KM" value="+269">KM (+269)</option>
  <option data-countryCode="CG" value="+242">CG (+242)</option>
  <option data-countryCode="CK" value="+682">CK (+682)</option>
  <option data-countryCode="CR" value="+506">CR (+506)</option>
  <option data-countryCode="HR" value="+385">HR (+385)</option>
  <option data-countryCode="CU" value="+53">CU (+53)</option>
  <option data-countryCode="CY" value="+90392">CY (North)(+90392)</option>
  <option data-countryCode="CY" value="+357">CY (South)(+357)</option>
  <option data-countryCode="CZ" value="+42">CZ (+42)</option>
  <option data-countryCode="DK" value="+45">DK (+45)</option>
  <option data-countryCode="DJ" value="+253">DJ (+253)</option>
  <option data-countryCode="DM" value="+1809">DM (+1809)</option>
  <option data-countryCode="DO" value="+1809">DO (+1809)</option>
  <option data-countryCode="EC" value="+593">EC (+593)</option>
  <option data-countryCode="EG" value="+20">EG (+20)</option>
  <option data-countryCode="SV" value="+503">SV (+503)</option>
  <option data-countryCode="GQ" value="+240">GQ (+240)</option>
  <option data-countryCode="ER" value="+291">ER (+291)</option>
  <option data-countryCode="EE" value="+372">EE (+372)</option>
  <option data-countryCode="ET" value="+251">ET (+251)</option>
  <option data-countryCode="FK" value="+500">FK (+500)</option>
  <option data-countryCode="FO" value="+298">FO (+298)</option>
  <option data-countryCode="FJ" value="+679">FJ (+679)</option>
  <option data-countryCode="FI" value="+358">FI (+358)</option>
  <option data-countryCode="FR" value="+33">FR (+33)</option>
  <option data-countryCode="GF" value="+594">GF (+594)</option>
  <option data-countryCode="PF" value="+689">PF (+689)</option>
  <option data-countryCode="GA" value="+241">GA (+241)</option>
  <option data-countryCode="GM" value="+220">GM (+220)</option>
  <option data-countryCode="GE" value="+7880">GE (+7880)</option>
  <option data-countryCode="DE" value="+49">DE (+49)</option>
  <option data-countryCode="GH" value="+233">GH (+233)</option>
  <option data-countryCode="GI" value="+350">GI (+350)</option>
  <option data-countryCode="GR" value="+30">GR (+30)</option>
  <option data-countryCode="GL" value="+299">GL (+299)</option>
  <option data-countryCode="GD" value="+1473">GD (+1473)</option>
  <option data-countryCode="GP" value="+590">GP (+590)</option>
  <option data-countryCode="GU" value="+671">GU (+671)</option>
  <option data-countryCode="GT" value="+502">GT (+502)</option>
  <option data-countryCode="GN" value="+224">GN (+224)</option>
  <option data-countryCode="GW" value="+245">GW (+245)</option>
  <option data-countryCode="GY" value="+592">GY (+592)</option>
  <option data-countryCode="HT" value="+509">HT (+509)</option>
  <option data-countryCode="HN" value="+504">HN (+504)</option>
  <option data-countryCode="HK" value="+852">HK (+852)</option>
  <option data-countryCode="HU" value="+36">HU (+36)</option>
  <option data-countryCode="IS" value="+354">IS (+354)</option>
  <option data-countryCode="ID" value="+62">ID (+62)</option>
  <option data-countryCode="IR" value="+98">IR (+98)</option>
  <option data-countryCode="IQ" value="+964">IQ (+964)</option>
  <option data-countryCode="IE" value="+353">IE (+353)</option>
  <option data-countryCode="IL" value="+972">IL (+972)</option>
  <option data-countryCode="IT" value="+39">IT (+39)</option>
  <option data-countryCode="JM" value="+1876">JM (+1876)</option>
  <option data-countryCode="JP" value="+81">JP (+81)</option>
  <option data-countryCode="JO" value="+962">JO (+962)</option>
  <option data-countryCode="KZ" value="+7">KZ (+7)</option>
  <option data-countryCode="KE" value="+254">KE (+254)</option>
  <option data-countryCode="KI" value="+686">KI (+686)</option>
  <option data-countryCode="KP" value="+850">KP (+850)</option>
  <option data-countryCode="KR" value="+82">KR (+82)</option>
  <option data-countryCode="KW" value="+965">KW (+965)</option>
  <option data-countryCode="KG" value="+996">KG (+996)</option>
  <option data-countryCode="LA" value="+856">LA (+856)</option>
  <option data-countryCode="LV" value="+371">LV (+371)</option>
  <option data-countryCode="LB" value="+961">LB (+961)</option>
  <option data-countryCode="LS" value="+266">LS (+266)</option>
  <option data-countryCode="LR" value="+231">LR (+231)</option>
  <option data-countryCode="LY" value="+218">LY (+218)</option>
  <option data-countryCode="LI" value="+417">LI (+417)</option>
  <option data-countryCode="LT" value="+370">LT (+370)</option>
  <option data-countryCode="LU" value="+352">LU (+352)</option>
  <option data-countryCode="MO" value="+853">MO (+853)</option>
  <option data-countryCode="MK" value="+389">MK (+389)</option>
  <option data-countryCode="MG" value="+261">MG (+261)</option>
  <option data-countryCode="MW" value="+265">MW (+265)</option>
  <option data-countryCode="MY" value="+60">MY (+60)</option>
  <option data-countryCode="MV" value="+960">MV (+960)</option>
  <option data-countryCode="ML" value="+223">ML (+223)</option>
  <option data-countryCode="MT" value="+356">MT (+356)</option>
  <option data-countryCode="MH" value="+692">MH (+692)</option>
  <option data-countryCode="MQ" value="+596">MQ (+596)</option>
  <option data-countryCode="MR" value="+222">MR (+222)</option>
  <option data-countryCode="YT" value="+269">YT (+269)</option>
  <option data-countryCode="MX" value="+52">MX (+52)</option>
  <option data-countryCode="FM" value="+691">FM (+691)</option>
  <option data-countryCode="MD" value="+373">MD (+373)</option>
  <option data-countryCode="MC" value="+377">MC (+377)</option>
  <option data-countryCode="MN" value="+976">MN (+976)</option>
  <option data-countryCode="MS" value="+1664">MS (+1664)</option>
  <option data-countryCode="MA" value="+212">MA (+212)</option>
  <option data-countryCode="MZ" value="+258">MZ (+258)</option>
  <option data-countryCode="MN" value="+95">MM (+95)</option>
  <option data-countryCode="NA" value="+264">NA (+264)</option>
  <option data-countryCode="NR" value="+674">NR (+674)</option>
  <option data-countryCode="NP" value="+977">NP (+977)</option>
  <option data-countryCode="NL" value="+31">NL (+31)</option>
  <option data-countryCode="NC" value="+687">NC (+687)</option>
  <option data-countryCode="NZ" value="+64">NZ (+64)</option>
  <option data-countryCode="NI" value="+505">NI (+505)</option>
  <option data-countryCode="NE" value="+227">NE (+227)</option>
  <option data-countryCode="NG" value="+234">NG (+234)</option>
  <option data-countryCode="NU" value="+683">NU (+683)</option>
  <option data-countryCode="NF" value="+672">NF (+672)</option>
  <option data-countryCode="NP" value="+670">MP (+670)</option>
  <option data-countryCode="NO" value="+47">NO (+47)</option>
  <option data-countryCode="OM" value="+968">OM (+968)</option>
  <option data-countryCode="PW" value="+680">PW (+680)</option>
  <option data-countryCode="PA" value="+507">PA (+507)</option>
  <option data-countryCode="PG" value="+675">PG (+675)</option>
  <option data-countryCode="PY" value="+595">PY (+595)</option>
  <option data-countryCode="PE" value="+51">PE (+51)</option>
  <option data-countryCode="PH" value="+63">PH (+63)</option>
  <option data-countryCode="PL" value="+48">PL (+48)</option>
  <option data-countryCode="PT" value="+351">PT (+351)</option>
  <option data-countryCode="PR" value="+1787">PR (+1787)</option>
  <option data-countryCode="QA" value="+974">QA (+974)</option>
  <option data-countryCode="RE" value="+262">RE (+262)</option>
  <option data-countryCode="RO" value="+40">RO (+40)</option>
  <option data-countryCode="RU" value="+7">RU (+7)</option>
  <option data-countryCode="RW" value="+250">RW (+250)</option>
  <option data-countryCode="SM" value="+378">SM (+378)</option>
  <option data-countryCode="ST" value="+239">ST (+239)</option>
  <option data-countryCode="SA" value="+966">SA (+966)</option>
  <option data-countryCode="SN" value="+221">SN (+221)</option>
  <option data-countryCode="CS" value="+381">CS (+381)</option>
  <option data-countryCode="SC" value="+248">SC (+248)</option>
  <option data-countryCode="SL" value="+232">SL (+232)</option>
  <option data-countryCode="SG" value="+65">SG (+65)</option>
  <option data-countryCode="SK" value="+421">SK (+421)</option>
  <option data-countryCode="SI" value="+386">SI (+386)</option>
  <option data-countryCode="SB" value="+677">SB (+677)</option>
  <option data-countryCode="SO" value="+252">SO (+252)</option>
  <option data-countryCode="ZA" value="+27">ZA (+27)</option>
  <option data-countryCode="ES" value="+34">ES (+34)</option>
  <option data-countryCode="LK" value="+94">LK (+94)</option>
  <option data-countryCode="SH" value="+290">SH (+290)</option>
  <option data-countryCode="KN" value="+1869">KN (+1869)</option>
  <option data-countryCode="SC" value="+1758">LC (+1758)</option>
  <option data-countryCode="SR" value="+597">SR (+597)</option>
  <option data-countryCode="SD" value="+249">SD (+249)</option>
  <option data-countryCode="SZ" value="+268">SZ (+268)</option>
  <option data-countryCode="SE" value="+46">SE (+46)</option>
  <option data-countryCode="CH" value="+41">CH (+41)</option>
  <option data-countryCode="SI" value="+963">SY (+963)</option>
  <option data-countryCode="TW" value="+886">TW (+886)</option>
  <option data-countryCode="TJ" value="+7">TJ (+7)</option>
  <option data-countryCode="TH" value="+66">TH (+66)</option>
  <option data-countryCode="TG" value="+228">TG (+228)</option>
  <option data-countryCode="TO" value="+676">TO (+676)</option>
  <option data-countryCode="TT" value="+1868">TT (+1868)</option>
  <option data-countryCode="TN" value="+216">TN (+216)</option>
  <option data-countryCode="TR" value="+90">TR (+90)</option>
  <option data-countryCode="TM" value="+7">TM (+7)</option>
  <option data-countryCode="TM" value="+993">TM (+993)</option>
  <option data-countryCode="TC" value="+1649">TC (+1649)</option>
  <option data-countryCode="TV" value="+688">TV (+688)</option>
  <option data-countryCode="UG" value="+256">UG (+256)</option>
  <option data-countryCode="UA" value="+380">UA (+380)</option>
  <option data-countryCode="AE" value="+971">AE (+971)</option>
  <option data-countryCode="UY" value="+598">UY (+598)</option>
  <option data-countryCode="UZ" value="+7">UZ (+7)</option>
  <option data-countryCode="VU" value="+678">VU (+678)</option>
  <option data-countryCode="VA" value="+379">VA (+379)</option>
  <option data-countryCode="VE" value="+58">VE (+58)</option>
  <option data-countryCode="VN" value="+84">VN (+84)</option>
  <option data-countryCode="VG" value="+1284">VG (+1284)</option>
  <option data-countryCode="VI" value="+1340">VI (+1340)</option>
  <option data-countryCode="WF" value="+681">WF (+681)</option>
  <option data-countryCode="YE" value="+969">YE (+969)</option>
  <option data-countryCode="YE" value="+967">YE (+967)</option>
  <option data-countryCode="ZM" value="+260">ZM (+260)</option>
  <option data-countryCode="ZW" value="+263">ZW (+263)</option>
  </select>
  </span>
  <label></label>
  </span>
  <span> 
  <input type="text" compname="PhoneNumber" name="PhoneNumber_countrycode" maxlength="10" checktype="c7" value="" phoneFormat="1" isCountryCodeEnabled=true fieldType="11" id="international_PhoneNumber_countrycode" valType="number" phoneFormatType="1" placeholder="Mobile Number" value='' required/>
  <label></label> </span>
  <div class="zf-clearBoth"></div></div><p id="PhoneNumber_error" class="zf-errorMessage" style="display:none;">Invalid value</p>
  </div><div class="zf-clearBoth"></div></li>
  <!---------Phone Ends Here----------> 
  
  <!---------input Starts Here---------->
  <input  type="text" name="SingleLine1" class='display-none' value=${service} fieldType=1 maxlength="255" placeholder="" />
  <!---------input Ends Here---------->
  
  
  </ul></div><!---------template Container Starts Here---------->
  <ul class='ul'><li class="zf-fmFooter"><button class="zf-submitColor" >Get a Detailed Quotation Now!</button></li></ul></div><!-- 'zf-templateWrapper' ends --></form></div>
  
  
  <script>
  var zf_DateRegex = new RegExp("^(([0][1-9])|([1-2][0-9])|([3][0-1]))[-](Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec|JAN|FEB|MAR|APR|MAY|JUN|JUL|AUG|SEP|OCT|NOV|DEC)[-](?:(?:19|20)[0-9]{2})$");
  var zf_MandArray = [ "SingleLine", "Email", "PhoneNumber_countrycode", "PhoneNumber_countrycodeVal", "SingleLine1"]; 
  var zf_FieldArray = [ "SingleLine", "Email", "PhoneNumber_countrycode", "PhoneNumber_countrycodeVal", "SingleLine1"]; 
  var isSalesIQIntegrationEnabled = false;
  var salesIQFieldsArray = [];
  </script>
  
  <script>
  function zf_ValidateAndSubmit(){
	  if(zf_CheckMandatory()){
		  if(zf_ValidCheck()){
			  if(isSalesIQIntegrationEnabled){
				  zf_addDataToSalesIQ();
			  }
			  return true;
		  }else{		
			  return false;
		  }
	  }else{
		  return false;
	  }
  }
	  function zf_CheckMandatory(){
	  for(i = 0 ; i < zf_MandArray.length ; i ++) {
			var fieldObj=document.forms.form[zf_MandArray[i]];
			if(fieldObj) {  
					if(fieldObj.nodeName != null ){
						if ( fieldObj.nodeName=='OBJECT' ) {
							  if(!zf_MandatoryCheckSignature(fieldObj)){
								  zf_ShowErrorMsg(zf_MandArray[i]);
								   return false;
							  }
						  }else if (((fieldObj.value).replace(/^\s+|\s+$/g, '')).length==0) {
						   if(fieldObj.type =='file')
							  { 
							   fieldObj.focus(); 
							   zf_ShowErrorMsg(zf_MandArray[i]);
							   return false;
							  } 
									fieldObj.focus();
									zf_ShowErrorMsg(zf_MandArray[i]);
									return false;
						  }  else if( fieldObj.nodeName=='SELECT' ) {// No I18N
								   if(fieldObj.options[fieldObj.selectedIndex].value=='-Select-') {
							  fieldObj.focus();
							  zf_ShowErrorMsg(zf_MandArray[i]);
							  return false;
							 }
						  } else if( fieldObj.type =='checkbox' || fieldObj.type =='radio' ){
							  if(fieldObj.checked == false){
								  fieldObj.focus();
								  zf_ShowErrorMsg(zf_MandArray[i]);
								  return false;
								 } 
						  } 
					}else{
						var checkedValsCount = 0;
					  var inpChoiceElems = fieldObj;
						  for(var ii = 0; ii < inpChoiceElems.length ; ii ++ ){
								if(inpChoiceElems[ii].checked === true ){
									checkedValsCount ++;
								}
						  }
						  if ( checkedValsCount == 0) {
								  inpChoiceElems[0].focus();
								  zf_ShowErrorMsg(zf_MandArray[i]);
								  return false;
							   }
				  }
		  }
	  }
	  return true;
  }
  function zf_ValidCheck(){
	  var isValid = true;
	  for(ind = 0 ; ind < zf_FieldArray.length ; ind++ ) {
		  var fieldObj=document.forms.form[zf_FieldArray[ind]];
			if(fieldObj) {
				if(fieldObj.nodeName != null ){
					var checkType = fieldObj.getAttribute("checktype"); 
					if( checkType == "c2" ){// No I18N
						if( !zf_ValidateNumber(fieldObj)){
						  isValid = false;
						  fieldObj.focus();
						  zf_ShowErrorMsg(zf_FieldArray[ind]);
						  return false;
					  }
					}else if( checkType == "c3" ){// No I18N
						if (!zf_ValidateCurrency(fieldObj) || !zf_ValidateDecimalLength(fieldObj,10) ) {
						  isValid = false;
						  fieldObj.focus();
						  zf_ShowErrorMsg(zf_FieldArray[ind]);
						  return false;
					  }
					}else if( checkType == "c4" ){// No I18N
						if( !zf_ValidateDateFormat(fieldObj)){
						  isValid = false;
						  fieldObj.focus();
						  zf_ShowErrorMsg(zf_FieldArray[ind]);
						  return false;
					  }
					}else if( checkType == "c5" ){// No I18N
						if (!zf_ValidateEmailID(fieldObj)) {
						  isValid = false;
						  fieldObj.focus();
						  zf_ShowErrorMsg(zf_FieldArray[ind]);
						  return false;
					  }
					}else if( checkType == "c6" ){// No I18N
						if (!zf_ValidateLiveUrl(fieldObj)) {
						  isValid = false;
						  fieldObj.focus();
						  zf_ShowErrorMsg(zf_FieldArray[ind]);
						  return false;
						  }
					}else if( checkType == "c7" ){// No I18N
						if (!zf_ValidatePhone(fieldObj)) {
						  isValid = false;
						  fieldObj.focus();
						  zf_ShowErrorMsg(zf_FieldArray[ind]);
						  return false;
						  }
					}else if( checkType == "c8" ){// No I18N
						zf_ValidateSignature(fieldObj);
					}
				}
			}
	  }
		   return isValid;
  }
  function zf_ShowErrorMsg(uniqName){
	  var fldLinkName;
	  for( errInd = 0 ; errInd < zf_FieldArray.length ; errInd ++ ) {
		  fldLinkName = zf_FieldArray[errInd].split('_')[0];
		  document.getElementById(fldLinkName+"_error").style.display = 'none';
	  }
	  var linkName = uniqName.split('_')[0];
	  document.getElementById(linkName+"_error").style.display = 'block';
  }
  function zf_ValidateNumber(elem) {
	   var validChars = "-0123456789";
	   var numValue = elem.value.replace(/^\s+|\s+$/g, '');
	   if (numValue != null && !numValue == "") {
		   var strChar;
		   var result = true;
		   if (numValue.charAt(0) == "-" && numValue.length == 1) {
			   return false;
		   }
		   for (i = 0; i < numValue.length && result == true; i++) {
			   strChar = numValue.charAt(i);
			   if ((strChar == "-") && (i != 0)) {
				   return false;
			   }
			   if (validChars.indexOf(strChar) == -1) {
				   result = false;
			   }
		   }
		   return result;
	   } else {
		   return true;
	   }
   }
   function zf_ValidateDateFormat(inpElem){
	   var dateValue = inpElem.value.replace(/^\s+|\s+$/g, '');
	   if( dateValue == "" ){
		   return true;
	   }else{
		  return( zf_DateRegex.test(dateValue) );
	  }
   }
   function zf_ValidateCurrency(elem) {
	   var validChars = "0123456789."; 
	   var numValue = elem.value.replace(/^\s+|\s+$/g, '');
	   if(numValue.charAt(0) == '-'){
		   numValue = numValue.substring(1,numValue.length);
	   }
	   if (numValue != null && !numValue == "") {
		   var strChar;
		   var result = true;
		   for (i = 0; i < numValue.length && result == true; i++) {
			   strChar = numValue.charAt(i);
			   if (validChars.indexOf(strChar) == -1) {
				   result = false;
			   }
		   }
		   return result;
	   } else {
		   return true;
	   }
   }
   function zf_ValidateDecimalLength(elem,decimalLen) {
	   var numValue = elem.value;
	   if (numValue.indexOf('.') >= 0) {
		   var decimalLength = numValue.substring(numValue.indexOf('.') + 1).length;
		   if (decimalLength > decimalLen) {
			   return false;
		   } else {
			   return true;
		   }
	   }
	   return true;
   }
   function zf_ValidateEmailID(elem) {
	  var check = 0;
	  var emailValue = elem.value;
	  if (emailValue != null && !emailValue == "") {
		  var emailArray = emailValue.split(",");
		  for (i = 0; i < emailArray.length; i++) {
			  var emailExp = /^[\w]([\w\-.+&'/]*)@([a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,22}$/;
			  if (!emailExp.test(emailArray[i].replace(/^\s+|\s+$/g, ''))) {
				  check = 1;
			  }
		  }
		  if (check == 0) {
			  return true;
		  } else {
			  return false;
		  }
	  } else {
		  return true;
	  }
  }
  function zf_ValidateLiveUrl(elem) {
	  var urlValue = elem.value;
	  if(urlValue !== null && typeof(urlValue) !== "undefined") {
		  urlValue = urlValue.replace(/^\s+|\s+$/g, '');
		  if(urlValue !== "") {
			  var urlregex = new RegExp("^((((h|H)(t|T)|(f|F))(t|T)(p|P)((s|S)?)://[-.\\w]*)|(((w|W){3}\\.)[-.\\w]+))(/?)([-\\w.?,:'/\\\\+=&;%$#@()!~]*)?$"); // Same regex as website_url in security-regex.xml. But single backslash is replaced with two backslashes.
			  return(urlregex.test(urlValue));
		  }
	  }
	  return true;
  }
  function zf_ValidatePhone(inpElem){
	  
	  var ZFPhoneRegex = {
		  PHONE_INTE_ALL_REG: /^[+]{0,1}[()0-9-. ]+$/,
		  PHONE_INTE_NUMERIC_REG: /^[0-9]+$/,
		  PHONE_INTE_CONT_CODE_ENABLED_REG: /^[(0-9-.][()0-9-. ]*$/,
		  PHONE_USA_REG: /^[0-9]+$/,
		  PHONE_CONT_CODE_REG: /^[+][0-9]{1,4}$/
	  }
	  var phoneFormat = parseInt(inpElem.getAttribute("phoneFormat")); 
	  var fieldInpVal = inpElem.value.replace(/^\s+|\s+$/g, '');
	  var toReturn = true ;
	  if( phoneFormat === 1 ){
		  if(inpElem.getAttribute("valType") == 'code'){
			  var codeRexp = ZFPhoneRegex.PHONE_CONT_CODE_REG;
			  if(fieldInpVal != "" && !codeRexp.test(fieldInpVal)){
				 return false;
			  }
		  }else{
			  var IRexp = ZFPhoneRegex.PHONE_INTE_ALL_REG;
			  if(inpElem.getAttribute("phoneFormatType") == '2'){
				  IRexp = ZFPhoneRegex.PHONE_INTE_NUMERIC_REG;
			  }
			   if (fieldInpVal != "" && !IRexp.test(fieldInpVal)) {
				   toReturn = false;
				   return toReturn;
			   }
		   }
		   return toReturn;
	  }else if( phoneFormat === 2 ){
		  var InpMaxlength = inpElem.getAttribute("maxlength");
		  var USARexp = ZFPhoneRegex.PHONE_USA_REG;
		  if  ( fieldInpVal != "" && USARexp.test(fieldInpVal) &&  fieldInpVal.length == InpMaxlength ) {
			  toReturn = true;
		  }else if( fieldInpVal == "" ){
			  toReturn = true;
		  }else{
			  toReturn = false;
		  }
		  return toReturn;
	  }
  }
  
  function zf_ValidateSignature(objElem) {
		var linkName = objElem.getAttribute("compname");
		var canvasElem = document.getElementById("drawingCanvas-"+linkName);
		var isValidSign = zf_IsSignaturePresent(objElem,linkName,canvasElem);
		 var hiddenSignInputElem = document.getElementById("hiddenSignInput-"+linkName);
	  if(isValidSign){
		  hiddenSignInputElem.value = canvasElem.toDataURL();
	  }else{
		  hiddenSignInputElem.value = "";// No I18N
	  }
	  return isValidSign;
	}
  
	function zf_MandatoryCheckSignature(objElem){
		var linkName = objElem.getAttribute("compname");
		var canvasElem = document.getElementById("drawingCanvas-"+linkName);
		var isValid = zf_IsSignaturePresent(objElem,linkName,canvasElem);
	  return isValid;
	}
  
	function zf_IsSignaturePresent(objElem,linkName,canvasElem){
		 var context = canvasElem.getContext('2d'); // No I18N
		 var canvasWidth = canvasElem.width;
		 var canvasHeight = canvasElem.height;
		 var canvasData = context.getImageData(0, 0, canvasWidth, canvasHeight);
		 var signLen = canvasData.data.length;
		 var flag = false;
		 for(var index =0; index< signLen; index++) {
			  if(!canvasData.data[index]) {
					flag =  false;
			  }else if(canvasData.data[index]) {
					flag = true;
					break;
			  }
		 }
	  return flag;
	}
  
  function zf_FocusNext(elem,event) {  
	   if(event.keyCode == 9 || event.keyCode == 16){
		return;
	  }
	  if(event.keyCode >=37 && event.keyCode <=40){
		 return;
	  } 	
	  var compname = elem.getAttribute("compname");
	  var inpElemName = elem.getAttribute("name");
	   if (inpElemName == compname+"_countrycode") { 
		   if (elem.value.length == 3) {
			   document.getElementsByName(compname+"_first")[0].focus();
		   }
	   } else if (inpElemName == compname+"_first" ) { 
		   if (elem.value.length == 3) {
			   document.getElementsByName(compname+"_second")[0].focus();
		   }
	   }
  }
  </script>
  
  <style>
  /* $Id: $ */
  @charset "UTF-8";
 
  .ul{
	margin: 0;
	  padding: 0;
	  border: 0;
	  font: inherit;
	  vertical-align: baseline;
  }
  .zf-formHeading {
	  background-attachment: fixed;
	  color: #444444;
	  font: 75%/1.3 Arial, Helvetica, sans-serif;
	  margin: 0 auto;
  }
  
  input, input[type="text"],input[type="email"], input[type="search"] {
	  outline:none;
	  margin:0 auto;
	  padding:5px 10px;
	  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
	  -moz-box-sizing: border-box;    /* Firefox, other Gecko */
	  box-sizing: border-box;         /* Opera/IE 8+ */
  }
  input[type="text"]::-webkit-input-placeholder {
	  color: white;
	}
	input[type="email"]::-webkit-input-placeholder {
	  color: white;
	}
 
  .zf-flLeft {
	  float:left;
  }
  .zf-flRight {
	  float:right;
  }
  .zf-clearBoth {
	  clear:both;
  }
  .ul {
	  list-style: none outside none;
  }
  .zf-normalText {
	  font-size:13px;
	  line-height:1.5;
  }
  .zf-smallText {
	  font-size:0.9em;
	  font-weight:normal;
  }
  .zf-smallHeading {
	  font-size:18px;
  }
  .zf-heading {
	  font-size:2em;
  }
  .zf-subHeading {
	  font-size:1.5em;
  }
  .zf-boldText, .zf-boldText a {
	  font-weight:bold;
	  text-decoration:none;
  }
  .zf-italicText {
	  font-style:italic;
  }
  .zf-formHeading{
	  color:#F8FCFF;
	  font-weight:bold;
	  font-size:17px;
	  margin-top:30px;
	  margin-bottom:15px;
	  text-align:justify;
  }
  .zf-heading {
	  text-decoration:underline;
  }
  .zf-heading {
	  text-decoration:none;
  }
  .zf-blodText {
	  font-weight:bold;
  }
  .zf-overAuto {
	  overflow:auto;
  }
  .zf-split {
	  color: #8B9193;
	  padding: 0 3px;
  }
  
  .zf-backgroundBg {
	  background:#f5f5f5;
  }
  
  .zf-templateWidth {
	  margin:1% auto;	
	  
  }
  
  .zf-templateWidth { 
	  <!---width:350px;---->
	  
	  
	  
	  }
  .highlightedHeadingText{
	  color:#FFA229;
  }
  .zf-templateWrapper {
	  // background:#fff;
	  background:#164760;
	  <!--border:1px solid #d6d6d6;-->
	  -webkit-box-shadow: 0 0px 3px #E1E1E1;
	  -moz-box-shadow: 0 0px 3px #E1E1E1;
	  <!---box-shadow: 0 0px 3px #E1E1E1;-->
	  -webkit-border-radius:2px;
	  -moz-border-radius:2px;
	  border-radius:10px;
	  
  }
  
  .zf-tempContDiv input[type="text"],input[type="email"], .zf-tempContDiv textarea, .zf-tempContDiv .zf-pdfTextArea {
	  background:#376176;	
	  border: 1px solid #376176;	
	  color: white;
	  -webkit-border-radius:2px; 	
	  -moz-border-radius:2px;	
	  border-radius:5px;	
	  padding:10px;
	  font-size:13px;	
  }
  
  .zf-tempContDiv input[type="text"]:hover,input[type="email"]:hover,  .zf-tempContDiv textarea:hover{	
	  border:1px solid rgba(157, 157, 157, 0.75) !important;	
	  }	
  .zf-tempContDiv input[type="text"]:focus,input[type="email"]:focus, .zf-tempContDiv textarea:focus{	
	  border:1px solid rgba(121, 187, 238, 0.75) !important;	
	  -webkit-box-shadow:0 0 5px rgba(82, 168, 236, 0.5) !important;	
	  -moz-box-shadow:0 0 5px rgba(82, 168, 236, 0.5) !important;	
	  box-shadow:0 0 5px rgba(82, 168, 236, 0.5) !important;	
	  }
	  
  .zf-tempContDiv textarea {
	  height:75px;
  }
  .arrangeAddress .zf-addrCont  .zf-addtwo{ width: 99% !important;float: none !important;} 		
  /**********Error Message***********/	
  .zf-errorMessage {
	  font:12px Arial, Helvetica, sans-serif;
	  color:#ff0000;
	  padding-top:5px;
  }
  
  /**********Mandatory Message***********/	
  .zf-important {
	  color:#ff0000 !important;
	  font-weight: normal;
	  margin-left:0px;
	  padding: 0;
	  font-size:13px !important;
  }
  
  /**********instruction Message***********/
  .zf-instruction {
	  color:#939393;
	  font-style:italic;
	  margin-top:3px;
	  font-size:12px;
	  overflow:visible !important;
	  word-break: break-all;
	  margin-bottom: 3px;
  }	
  
  .zf-symbols {
	  padding:0 5px;
  }
  
  .zf-overflow{ overflow:hidden;}
  
  /*****************template Header Starts Here****************/
  
  .zf-tempHeadBdr {
	  margin:0;
	  padding:0;
	  overflow:hidden;
  }
  
  .zf-tempHeadContBdr {
	  <!---background: #494949;---->
	  border-bottom:1px solid #EAEAEA;
	  margin: 0;
	  padding:10px 25px;
	  -webkit-border-radius:2px 2px 0 0;
	  -moz-border-radius:2px 2px 0 0;
	  border-radius:2px 2px 0 0;
  }
  .zf-tempHeadContBdr .zf-frmTitle {
	  color: #FFFFFF;
	  margin: 0;
	  padding: 0;
	  font-size:2em;
  }
  .zf-tempHeadContBdr .zf-frmDesc {
	  color: #DDDDDD;
	  font-size: 14px;
	  font-weight: normal;
	  margin: 0;
	  padding: 0;
  }
  
  /****************template Header Ends Here****************/
  
  
  .zf-subContWrap {
	  padding:0;
	  margin:10px;
	  margin-bottom:0;
  }
  
  .zf-tempFrmWrapper {
	  padding:10px 15px;
	  margin:1px 0;
  }
  
  .zf-tempFrmWrapper .zf-tempContDiv {
	  margin:0;
	  padding:0;
  }
  
  .zf-tempFrmWrapper .zf-labelName {
	  font-weight:bold;
	  font-size:13px;
	  color:#517588;
	  font-size: 0.8rem;
	
  }
  
  .zf-form-sBox{ 
	  
	  padding:10px; 
	  border:1px solid #376176; 
	  font-size:13px;
	  border-radius: 5px;
	  background:#376176;
	  color:white;
	  outline:none;
	  
	  
	  }
  
  .zf-form-sBox::-webkit-scrollbar{
	  width:7px;
	  background:white;
  }
  .zf-form-sBox::-webkit-scrollbar-thumb{
	  
	  border-top: 60px solid #FFA229 ;
	  
  }
  
  
  .zf-name .zf-tempContDiv, .zf-phone .zf-tempContDiv span, .zf-time .zf-tempContDiv{
	  float: left;
	  display:block;
  }
  
  .zf-name .zf-tempContDiv span{margin-bottom:5px; margin-left: 4%;}
  .zf-name .zf-tempContDiv span.last{ margin-right:0;}
  .zf-name .zf-tempContDiv span { display: block;padding-top:3px;}
  .zf-name .zf-tempContDiv input[type="text"] {width:100%;}
  .zf-name .zf-tempContDiv input[type="email"] {width:100%;}
  
  
  .zf-phone .zf-tempContDiv, .zf-date .zf-tempContDiv, .zf-time .zf-tempContDiv, .zf-address .zf-tempContDiv, .zf-geolocation .zf-tempContDiv , .zf-name .zf-tempContDiv{ 
	  font-size:11px; 
	  padding-top:3px;
	  }
  .zf-phone .zf-tempContDiv, .zf-date .zf-tempContDiv, .zf-time .zf-tempContDiv, .zf-address .zf-tempContDiv, .zf-name .zf-tempContDiv  {
	  color:#888888;
	  
	  }
  .zf-phone .zf-tempContDiv   {
	  display: block;
	  padding-top:3px;
	  text-align:center;
  }
  .zf-phone .zf-tempContDiv .zf-symbols {
	  padding-top:5px;
  }
  
  
  .zf-currency .zf-tempContDiv { 
	  display:inline-block;
	  }
  .zf-currency .zf-tempContDiv   {
	  display: block;
	  padding-top:3px;
	  }
  .zf-currency .zf-tempContDiv .zf-symbol {
	  font-size: 14px;
	  margin-left:5px;
	  margin-top: 4px;
	  width:auto;
	  font-weight:bold;
	  }
  
  .zf-decesion .zf-tempContDiv{ 
	  width:100% !important; 
	  margin-top:4px;
	  }
  .zf-decesion input[type="checkbox"] {
	  display: block;
	  height: 13px;
	  margin: 0;
	  padding: 0;
	  width: 13px;
	  float:left;
	  margin-top:4px;
  }
  .zf-decesion  {
	  display: block;
	  line-height:21px;
	  margin: 0px 0 0 25px !important;
	  padding-bottom: 0 !important;
	  width:95% !important;
	  float:none !important;
	  line-height:21px !important;
	  text-align:left !important;
  } 
  
  .zf-tempContDiv input[type="file"]{
	  outline:none;
	  border:1px solid #ccc;
	  margin:0 auto;
	  padding:5px;
	  width:auto;
  }
  
  
  .zf-address .zf-tempContDiv , .zf-geolocation .zf-tempContDiv  {
	  display:block;
	  padding-bottom:15px;
	  margin-right:2%;
	  }
	  
  .zf-address .zf-tempContDiv  , .zf-geolocation .zf-tempContDiv  {
	  display: block;
	  padding-top:3px;
	  }	
	  
  .zf-address .zf-tempContDiv .zf-addOne, .zf-geolocation .zf-tempContDiv .zf-addOne{
	  float: none;
	  padding-bottom:15px;
	  margin-right:0;
	  }
  
  .zf-address .zf-tempContDiv .zf-addOne input, .zf-geolocation .zf-tempContDiv .zf-addOne input{
	  width:98%;
	  }
  .zf-address .zf-tempContDiv .zf-addtwo, .zf-geolocation .zf-tempContDiv .zf-addtwo{
	  width:48%;
	  }
  .zf-address .zf-tempContDiv .zf-addtwo input, .zf-geolocation .zf-tempContDiv .zf-addtwo input{
	  width:99%;
	  }	
  .zf-address .zf-tempContDiv .zf-addtwo .zf-form-sBox{
	  width:100%;
	  }
	  
  .zf-signContainer{ 
	  margin:0; 
	  padding:0; 
	  width:100%;
	  }
  .zf-signContainer canvas{ 
	  cursor:crosshair;
	  border:1px solid #ccc; 
	  background:#fff;
	  }
  .zf-signContainer a{
	  font-size: 11px;
	  text-decoration: underline;
	  }	
	  
  .zf-section{
	  border-bottom:1px solid #D7D7D7;
	  font-size:22px; 
	  color:#000; 
	  font-weight:500; 
	  font-family:'Open Sans',"Lucida Grande",Arial,Helvetica,sans-serif; 
	  padding-bottom:10px;
	  }
  .zf-section p{ 
	  color:#847F7F; 
	  margin-top:10px;
	  }
	  
  .zf-note .zf-labelName{	
	  padding-top:7px;
	  color:#517588;
	  }
  
  .zf-templateWrapper .zf-note{ 
	  overflow:hidden;
	  }
  
  .zf-date .zf-tempContDiv span  {
	  display: block;
	  padding-top:3px;
	  text-align:left;
  }
  
  .zf-subDate{ margin-right:10px;}
  .zf-subDate { text-align:left !important;}
  
  .zf-time .zf-tempContDiv span  {
	  display: block;
	  padding-top:3px;
	  text-align:center;
  }
  
  .zf-time .zf-tempContDiv .zf-form-sBox{
	  min-width:58px;
  }
  
  .zf-time .zf-tempContDiv .zf-symbols {
	  padding-top:5px;
  }
  
  .zf-tempContDiv input[type="checkbox"], .zf-tempContDiv input[type="radio"] {
	  display: block;
	  height: 13px;
	  margin: 4px 0 0;
	  padding: 0;
	  width: 13px;
	  
  }
  
  .zf-radio .zf-overflow, .zf-checkbox .zf-overflow{padding-left:2px !important;
	  
  }
  
  .zf-sideBySide .zf-tempContDiv span {
	  margin: 0 15px 5px 0;
	  padding:0;
	  width:auto;
	  float: left;
	  display:block;
  }
  .zf-sideBySide .zf-tempContDiv span input[type="checkbox"] {
	  display: block;
	  width: 13px;
	  height: 13px;
	  padding: 0;
	  margin-top:3px;
	  float:left;
  }
  .zf-sideBySide .zf-tempContDiv span input[type="radio"] {
	  display: block;
	  width: 13px;
	  height: 13px;
	  margin-top:4px;
	  padding: 0;
	  float:left;
  }
  .zf-sideBySide .zf-tempContDiv  {
	  line-height:21px;
	  display: block;
	  margin: 0 0 0 20px;
	  padding: 0 0 5px;
  }
		  
  
  .zf-oneColumns .zf-tempContDiv  {
	  margin:0 0 13px 0;
	  padding:0;
	  width:100%;
	  display:block;
	  clear: both;
  }
  .zf-oneColumns .zf-tempContDiv span:last-child { margin-bottom:0;}
  
  .zf-oneColumns .zf-tempContDiv span input[type="checkbox"] {
	  display: block;
	  width: 13px;
	  height: 13px;
	  margin:0;
	  padding: 0;
	  margin-top:3px;
	  float:left;
  }
  .zf-oneColumns .zf-tempContDiv span input[type="radio"] {
	  display: block;
	  width: 13px;
	  height: 13px;
	  margin-top:4px;
	  padding: 0;
	  float:left;
  }
  .zf-oneColumns .zf-tempContDiv span {
	  line-height:19px;
	  display: block;
	  margin: 0 0 0 20px;
	  padding:0;
	  font-size:13px;
  }
  
  .zf-twoColumns .zf-tempContDiv span {
	  margin: 0 5px 13px 0;
	  width: 48%;
	  float: left;
	  display:block;
  }
  .zf-twoColumns .zf-tempContDiv span input[type="checkbox"] {
	  display: block;
	  width: 13px;
	  height: 13px;
	  margin: 0;
	  padding: 0;
	  margin-top:3px;
	  float:left;
  }
  .zf-twoColumns .zf-tempContDiv span input[type="radio"] {
	  display: block;
	  width: 13px;
	  height: 13px;
	  margin-top:4px;
	  padding: 0;
	  float:left;
  }
  .zf-twoColumns .zf-tempContDiv span  {
	  line-height:21px;
	  display: block;
	  margin: 0 0 0 20px;
	  padding: 0 0 5px;
  }
  .zf-threeColumns .zf-tempContDiv span {
	  margin: 0 5px 13px 0;
	  width:30%;
	  float: left;
  }
  .zf-threeColumns .zf-tempContDiv span input[type="checkbox"] {
	  display:block;
	  width: 13px;
	  height: 13px;
	  padding: 0;
	  margin-top:3px;
	  float:left;
  }
  .zf-threeColumns .zf-tempContDiv span input[type="radio"] {
	  display:block;
	  width: 13px;
	  height: 13px;
	  margin-top:4px;
	  padding: 0;
	  float:left;
  }
  .zf-threeColumns .zf-tempContDiv span label {
	  line-height:21px;
	  display: block;
	  margin: 0 0 0 20px;
	  padding: 0 0 5px;
  }
  
  .zf-mSelect select{ font-size:13px;}	
  
  .zf-fmFooter {
	  margin:0;
	  padding:25px;
	  padding-top:0px;
	  text-align:center;
  }
  
  .zf-fmFooter .zf-submitColor{ font-size:14px; padding:4px 10px;}
  
  .zf-submitColor{
	  color: #fff;
	  font-weight:bold;
	  border:1px solid;
	  border-color: #FFA229;
	  border-radius:5px;
	  background: #FFA229;
	  width:auto;
	  height:40px;
  
	  <!----	border-color: #2F9EEC #1988D6 #1988D6;--->
	  <!------
  
	  background: -webkit-gradient(linear, left top, left bottom, from(#2f9eec), to(#1988d6));
	  background: -moz-linear-gradient(top,  #2f9eec,  #1988d6);
	  filter:  progid:DXImageTransform.Microsoft.gradient(startColorstr='#2f9eec', endColorstr='#1988d6');
	  -moz-box-shadow:0 1px 2px rgba(0, 0, 0, 0.15);
	  -webkit-box-shadow:0 1px 2px rgba(0, 0, 0, 0.15);
	  box-shadow:0 1px 2px rgba(0, 0, 0, 0.15);
	  text-shadow:0 1px 0 rgba(0, 0, 0, 0.25);--->
	  }
	  
  <!---------
  
  .zf-submitColor:hover{
	  background: #1988d6;
	  background: -webkit-gradient(linear, left top, left bottom, from(#1988d6), to(#1988d6));
	  background: -moz-linear-gradient(top,  #1988d6,  #1988d6);
	  filter:  progid:DXImageTransform.Microsoft.gradient(startColorstr='#1988d6', endColorstr='#1988d6');
	  }	
  
	  -------------->
  
  /****************Field Small/Medium/Large Starts Here****************/
  
  .zf-small .zf-tempContDiv input[type="text"],input[type="email"], .zf-small .zf-tempContDiv textarea, .zf-small .zf-mSelect select, .zf-small .zf-tempContDiv .zf-sliderCont, .zf-small .zf-tempContDiv .zf-pdfTextArea{
	  width:50%;
	  }
  .zf-medium .zf-tempContDiv input[type="text"],input[type="email"], .zf-medium .zf-tempContDiv textarea, .zf-medium .zf-mSelect select, .zf-medium .zf-tempContDiv .zf-sliderCont, .zf-medium .zf-tempContDiv .zf-pdfTextArea{
	  width:75%;
	  }
  .zf-large .zf-tempContDiv input[type="text"],input[type="email"], .zf-large .zf-tempContDiv textarea, .zf-large .zf-mSelect select, .zf-large .zf-tempContDiv .zf-sliderCont, .zf-large .zf-tempContDiv .zf-pdfTextArea{
	  width:100%;
	  }
	  
	  
  .zf-small .zf-tempContDiv .zf-form-sBox{
	  width:50%;
	  }
  .zf-medium .zf-tempContDiv .zf-form-sBox{
	  width:75%;
	  }
  .zf-large .zf-tempContDiv .zf-form-sBox{
	  width:100%;
	  }
  
  
  .zf-name .zf-tempContDiv .zf-form-sBox{
	  width:100%;
	  }
  
  .zf-namesmall .zf-nameWrapper{ width: 50%;}
  .zf-namesmall .zf-tempContDiv span{width:48%;}
   
  .zf-namesmall .zf-oneType .zf-salutationWrapper span{width:63%; }
  .zf-namesmall .zf-oneType .zf-salutationWrapper .zf-salutation{ width: 33%;}
  
  .zf-namesmall .zf-twoType .zf-salutationWrapper span{width:34%;margin-left:3%;}
  .zf-namesmall .zf-twoType .zf-salutationWrapper .zf-salutation{ width:26%;}
  
  .zf-namesmall .zf-threeType .zf-nameWrapper span{width:32%; margin-left:2%;}
  
  .zf-namesmall .zf-threeType .zf-salutationWrapper span{ width:100%;margin-left: 0px; float:none; margin-left: 0;}
  .zf-namesmall .zf-threeType .zf-salutationWrapper .zf-salutation{ width:50%;}
  
  
  .zf-namesmall .zf-tempContDiv span:first-child{ margin-left:0;}
  
  .zf-leftAlign .zf-namesmall .zf-threeType .zf-salutationWrapper span, .zf-rightAlign .zf-namesmall	.zf-threeType .zf-salutationWrapper span{ width:100%;margin-left: 0px; float:none; margin-left: 0;}
  .zf-leftAlign .zf-namesmall .zf-threeType .zf-salutationWrapper .zf-salutation, .zf-rightAlign .zf-namesmall .zf-threeType .zf-salutationWrapper .zf-salutation{ width: 50%; }
  
  
  
  
  .zf-namemedium .zf-nameWrapper{ width: 75%;}
  
  .zf-namemedium .zf-tempContDiv span{width:49%; margin-left:2%;}
  
  
	  
  .zf-namemedium .zf-oneType .zf-salutationWrapper span{width:73%; }
  .zf-namemedium .zf-oneType .zf-salutationWrapper .zf-salutation{ width: 25%;}
  
  .zf-namemedium .zf-twoType .zf-salutationWrapper span{width:38%;margin-left:2%;}
  .zf-namemedium .zf-twoType .zf-salutationWrapper .zf-salutation{ width:20%;}
  
  
  .zf-namemedium .zf-threeType .zf-nameWrapper span{width:32%; margin-left:2%;}
  
  
  .zf-namemedium .zf-threeType .zf-salutationWrapper span{width:25%;margin-left:2%;}
  
  .zf-namemedium .zf-threeType .zf-salutationWrapper .zf-salutation{ width:19%;}
  
  .zf-namemedium .zf-tempContDiv span:first-child{ margin-left:0;}
  
  .zf-namelarge .zf-tempContDiv span{width:23.5%; margin-left:2%; margin-right: 0; margin-bottom: 0;}
  .zf-namelarge .zf-twoType .zf-nameWrapper span{width:49%; margin-left:2%;}
  .zf-namelarge .zf-threeType .zf-nameWrapper span{width:32%; margin-left:2%;}
  
  
  .zf-namelarge .zf-twoType .zf-salutationWrapper span{width:40%; margin-left:2%;}
  .zf-namelarge .zf-twoType .zf-salutationWrapper .zf-salutation{ width: 16%;}
  
  .zf-namelarge .zf-threeType .zf-salutationWrapper span{width:26%; margin-left:2%;}
  .zf-namelarge .zf-threeType .zf-salutationWrapper .zf-salutation{ width: 16%;}
  
  .zf-namelarge .zf-oneType .zf-salutationWrapper span{width:73%; margin-left:2%;}
  .zf-namelarge .zf-oneType .zf-salutationWrapper .zf-salutation{ width:25%;}
  
  .zf-namelarge .zf-tempContDiv span:first-child { margin-left:0 !important;}
  
  
  
  .zf-csmall	 .zf-tempContDiv input[type="text"] {
	  width:43%;
	  }
  .zf-cmedium .zf-tempContDiv input[type="text"] {
	  width:67%;
	  }
  .zf-clarge	 .zf-tempContDiv input[type="text"] {
	  width:91%;
	  } 	
  
  .zf-nsmall .zf-tempContDiv input[type="text"] {	
	  width:50%;	
	  }
  .zf-nmedium .zf-tempContDiv input[type="text"] {
	  width:75%;
	  }
  .zf-nlarge .zf-tempContDiv input[type="text"] {
	  width:100%;
	  }
  
	  .zf-csmall	 .zf-tempContDiv input[type="email"] {
		  width:43%;
		  }
	  .zf-cmedium .zf-tempContDiv input[type="email"] {
		  width:67%;
		  }
	  .zf-clarge	 .zf-tempContDiv input[type="email"] {
		  width:91%;
		  } 	
	  
	  .zf-nsmall .zf-tempContDiv input[type="email"] {	
		  width:50%;	
		  }
	  .zf-nmedium .zf-tempContDiv input[type="email"] {
		  width:75%;
		  }
	  .zf-nlarge .zf-tempContDiv input[type="email"] {
		  width:100%;
		  }
  
  .zf-signSmall .zf-tempContDiv .zf-signContainer .zf-signArea {	
	  width:49%;
	  }
  .zf-signMedium .zf-tempContDiv .zf-signContainer .zf-signArea {
	  width:60%;
	  }
  .zf-signLarge .zf-tempContDiv .zf-signContainer .zf-signArea {	
	  width:74%;
	  }	
  
  .zf-addrsmall .zf-tempContDiv .zf-addrCont{ 
	  width:50%;
	  }
  .zf-addrmedium .zf-tempContDiv .zf-addrCont{ 
	  width:75%;
	  }
  .zf-addrlarge .zf-tempContDiv .zf-addrCont{ 
	  width:100%;
	  }	
	  
	  
  /****************Field Small/Medium/Large Ends Here****************/	
  
  .zf-topAlign .zf-tempFrmWrapper .zf-labelName {
	  padding-bottom:8px;
	  display:block;
  }
  
  .zf-topAlign .zf-threeColumns .zf-labelName, .zf-topAlign .zf-twoColumns .zf-labelName, .zf-topAlign .zf-oneColumns .zf-labelName, .zf-topAlign .zf-sideBySide .zf-labelName{ padding-bottom:8px;}
  
  .zf-leftAlign {
	  display:block;
  }
  .zf-leftAlign .zf-tempFrmWrapper .zf-labelName {
	  float:left;
	  width:30%;
	  line-height:20px;
	  margin-right:15px;
  }
  .zf-leftAlign .zf-tempFrmWrapper .zf-tempContDiv {
	   margin-left: 35%;
  }
  
  .zf-leftAlign .zf-slider .zf-tempContDiv{ margin-top:6px;}
  
  .zf-leftAlign .zf-decesion .zf-tempContDiv, .zf-rightAlign .zf-decesion .zf-tempContDiv{ margin-left:0 !important;}
  
  .zf-rightAlign {
	  display:block;
  }
  .zf-rightAlign .zf-tempFrmWrapper .zf-labelName {
	  float:left;
	  width:30%;
	  line-height: 20px;
	  text-align:right;
	  margin-right:15px;
  }
  .zf-rightAlign .zf-tempFrmWrapper .zf-tempContDiv {
	   margin-left: 35%;
  }
  .zf-matrixTable{ font-size:13px; overflow-x: scroll;padding-bottom: 15px !important;}
  .zf-matrixTable table th, .zf-matrixTable table td{padding:10px;}
  .zf-matrixTable thead th, .zf-matrixTable table td{ text-align:center;}
  .zf-matrixTable table td input[type="radio"], .zf-matrixTable table td input[type="checkbox"]{ display:inline-block;}
  .zf-matrixTable tbody th{ font-weight:normal;font-size: 13px;text-align: left;}
  .zf-matrixTable thead th { font-weight:600;font-size: 13px;}
  
  /****************Form Top Align Starts Here****************/	
  
  .zf-termsContainer{ margin:0; padding:0;}
  .zf-termsContainer .zf-termsMsg {border: 1px solid #E1E1E1;max-height: 250px; min-height:70px; overflow-y:scroll; padding:10px;  margin-bottom:6px;}
  .zf-termsContainer .zf-termScrollRemove {border: 1px solid #E1E1E1;padding:10px;  margin-bottom:6px;}
  .zf-termsAccept{ margin-top:2px !important;}
  .zf-termsAccept input[type="checkbox"]{ margin-top:2px !important; float:left;}
  .zf-termsAccept label{ margin-left: 20px;font-size: 13px;float: none;display: block;}
  
  .zf-termsWrapper .zf-tempContDiv{ margin-left:0 !important;}
  .zf-termsWrapper .zf-labelName{ width:100% !important; text-align:left !important; padding-bottom:8px !important;}
  
  
  .zf-medium .zf-phwrapper {
	  width: 75%;
  }
  .zf-phwrapper.zf-phNumber span {
	  width: 100% !important;
  }
  .zf-phwrapper span:first-child {
	  margin-left: 0;
	  width: 25%;
  }
  .zf-phwrapper label {
	  display: block;
	  color: #888888;
	  font-size: 11px;
	  margin-top: 2px;
  }
  .zf-medium .zf-phonefld input[type="text"], .zf-small .zf-phonefld input[type="text"] {
	  width: 100%;
  }
  .zf-medium .zf-phonefld input[type="email"], .zf-small .zf-phonefld input[type="email"] {
	  width: 100%;
  }
  .zf-small .zf-phwrapper {
	  width: 50%;
  }
  .zf-tempFrmWrapper.zf-phone span {
	  width: auto;
	  margin: inherit;
  }
  .zf-phwrapper span {
	  margin-bottom: 10px;
	  float: left;
	  width: 73%;
	  margin-left: 2%;
  }
  .zf-descFld a{ text-decoration:underline;}
  .zf-descFld em{ font-style:italic;}
  .zf-descFld b{ font-weight:bold;}
  .zf-descFld i{ font-style: italic;}
  .zf-descFld u{ text-decoration:underline;}
  .zf-descFld ul{ margin:auto;}
  .zf-descFld ul{ list-style:disc;}
  .zf-descFld ol{ list-style:decimal;}
  .zf-descFld ul, .zf-descFld ol{margin: 10px 0;
	  padding-left: 20px;}
  
  .zf-descFld  ol.code {
	  list-style-position: outside;
	  list-style-type: decimal;
	  padding: 0 30px;
  }
  
  .zf-descFld  ol.code li {
	  background-color: #F5F5F5;
	  border-left: 2px solid #CCCCCC;
	  margin: 1px 0;
	  padding: 2px;
  }
  
  .zf-descFld  blockquote.zquote {
	  border-left: 3px solid #EFEFEF;
	  padding-left: 35px;
  }
  .zf-descFld  blockquote.zquote span.txt {
	  -moz-user-focus: ignore;
	  -moz-user-input: disabled;
	  -moz-user-select: none;
	  color: #058BC2;
	  float: left;
	  font: bold 50px Arial,Helvetica,sans-serif;
	  margin: -10px 0 0 -30px;
  }
  .zf-descFld  blockquote.block_quote {
	  background: url("../images/newQuote.gif") no-repeat scroll 12px 10px rgba(0, 0, 0, 0);
	  border-left: 3px solid #EFEFEF;
	  font: 13px/20px georgia,Arial,verdana,Helvetica,sans-serif;
	  margin: 15px 3px 15px 15px;
	  padding: 10px 10px 10px 40px;
  }
  .zf-descFld  .body {
	  font-family: Arial,Helvetica,sans-serif;
	  font-size: 13px;
	  margin: 8px;
  }
  .note .noteCont{ overflow:hidden;}
  .note .zf-descFld{
	  overflow:hidden;
	  font-size: 13px;
  }
  .display-none{
	display:none;
  }
  .padding-0{
	padding:0px;
  }
  </style>
	  
	  `;

	return (
		<form>
			<div dangerouslySetInnerHTML={{ __html: zohoFormCode }} />
		</form>
	);
};

export default ZohoFormService;
