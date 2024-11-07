<template>
  <header>
    <img class="logo" src="../assets/logo.png" alt="WeSignature Logo">
  </header>
  <body>
  <table>
    <tr>
      <td>
        <h1>Informationen</h1>
        <table>
          <tr>
            <td>
              <label>Firmierung:</label>
            </td>
            <td>
              <select v-model="company" id="company" name="company" @change="companyChange">
                <option value="WeMatch Consulting GmbH">WeMatch Consulting GmbH</option>
                <option value="WeMatch Engineering GmbH">WeMatch Engineering GmbH</option>
                <option value="TempMatch GmbH">TempMatch GmbH</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <label>Standort:</label>
            </td>
            <td>
              <select v-model="location" id="location" name="location" @change="locationChange">
                <option value="berlin">Berlin</option>
                <option value="hamburg">Hamburg</option>
                <option value="duesseldorf">Düsseldorf</option>
                <option value="muenchen">München</option>
                <option value="frankfurt">Frankfurt</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <label>Name:</label>
            </td>
            <td>
              <input v-model="name" type="text">
            </td>
          </tr>
          <tr>
            <td>
              <label>Position:</label>
            </td>
            <td>
              <input v-model="position" type="text" placeholder="z.B. Account Manager">
            </td>
          </tr>
          <tr>
            <td>
              <label>Telefon:</label>
            </td>
            <td>
              <input v-model="tel" type="tel" @change="telChange" placeholder="+49 160 123 45 67 89">
              <span class="error-text" v-if="incorrectTel"><br />Bitte gib deine Telefonnummer beginnend mit +49 ein.</span>
            </td>
          </tr>
          <tr>
            <td>
              <label>E-Mail:</label>
            </td>
            <td>
              <input v-model="email" type="email" @change="emailChange">
            </td>
          </tr>
          <tr>
            <td>
              <label>LinkedIn:</label>
            </td>
            <td>
              <input v-model="linkedin" type="url" placeholder="https://linkedin.com/in/max-mustermann">
            </td>
          </tr>
        </table>
        <p id="portrait-advice">Dein Portraitbild wird automatisch nach Eingabe der Email-Adresse eingefügt. Falls das nicht der Fall ist, melde dich bitte bei Team Operations.</p>

      </td>
      <td class="right-align">
        <h1 style="text-align: right;">Vorschau</h1>
        <!---  Signatur START  --->
        <div id="signaturecode" class="signature">
          <div ref="signaturecode">
            <table style="color:#202124; width:800px; flex-basis:auto">
              <tbody>
              <tr>
                <td style="width:800px">
                  <table>
                    <tbody>
                    <tr>
                      <td><img :src="picURL" style="height:130px; margin-right:15px; width:130px" alt="Portrait" /></td>
                      <td>
                        <p><strong>{{ name }}</strong></p>

                        <p>{{ position }}<br />
                          {{ company }}</p>
                      </td>
                      <td style="width:30px">&nbsp;</td>
                      <td style="border-bottom:none; border-left:1px solid #021e26; width:1px">&nbsp;</td>
                      <td style="width:15px">&nbsp;</td>
                      <td>
                        <table>
                          <tbody>
                          <tr>
                            <td>
                              <table>
                                <tbody>
                                <tr>
                                  <td><img src="https://i.ibb.co/72d2DPg/phone-icon.png" alt="Telefon"/></td>
                                </tr>
                                </tbody>
                              </table>
                            </td>
                            <td><a :href="telLink" style="color:#021e26;font-size:12px">{{ tel }}</a></td>
                          </tr>
                          <tr>
                            <td>
                              <table>
                                <tbody>
                                <tr>
                                  <td><img src="https://i.ibb.co/9HVnwx4/mail-icon.png" alt="Email" /></td>
                                </tr>
                                </tbody>
                              </table>
                            </td>
                            <td><a :href="emailLink" style="color:#021e26;font-size:12px">{{ email }}</a></td>
                          </tr>
                          <tr>
                            <td>
                              <table>
                                <tbody>
                                <tr>
                                  <td><img src="https://i.ibb.co/tzsD9mp/webicon.png" alt="Website" /></td>
                                </tr>
                                </tbody>
                              </table>
                            </td>
                            <td><a :href="companyURL" style="color:#021e26;font-size:12px">{{ companyURLShort }}</a></td>
                          </tr>
                          <tr>
                            <td>
                              <table>
                                <tbody>
                                <tr>
                                  <td><img src="https://i.ibb.co/8K8fY36/location-icon.png" alt="Location" /></td>
                                </tr>
                                </tbody>
                              </table>
                            </td>
                            <td><span style="color:#021e26; font-size:12px">{{ locationAddress }}</span></td>
                          </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td style="width:723px">
                  <table style="width:734px">
                    <tbody>
                    <tr>
                      <td style="border-bottom:1px solid #021e26; border-left:none; height:1px; width:723px">&nbsp;</td>
                    </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td style="width:723px">
                  <table style="width:734px">
                    <tbody>
                    <tr>
                      <td style="vertical-align:top"><a :href="companyURL" target="_blank"><img :src="logoLink" alt="Company Logo" /></a></td>
                      <td>&nbsp;</td>
                      <td style="width:205.156px"><a :href="linkedin" style="padding:0px; float:right" target="_blank"><img alt="linkedin" src="https://i.ibb.co/SQ560NH/linkedin-icon-1.png" /></a></td>
                      <td style="width:1px">&nbsp;</td>
                    </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              </tbody>
            </table>
            <p><img alt="" src="https://wematch-intern.de/bilder/wm-kununu-signatur_400%20%281%29.jpg" /></p>
          </div>
        </div>
        <!---  Signatur ENDE  --->
      </td>
    </tr>
    <tr style="width:100%">
      <td></td>
      <td class="right-align">
        <a href="https://docs.google.com/document/d/1zdj-zWOcgPLFWUVd4rWJq0JgY2G0Plkz2dYyh-TBrls/edit?usp=sharing" target="_blank">
          <button class="howto outlined">How-To: Signaturen einfügen</button>
        </a>
        <button class="copy-button" style="margin-right: 10px" @click="copyHtmlCode">Kopieren für bullhorn</button>
        <button class="copy-button" @click="copyUserView">Kopieren für Gmail</button>
      </td>
    </tr>
  </table>
  </body>
</template>

<script>
import * as DbService from "@/DbService.js";

export default {
  data() {
    return {
      company: "",
      location: "",
      name: "",
      position: "",
      tel: "",
      email: "",
      linkedin: "",
      picURL: "",
      telLink: "",
      emailLink: "",
      companyURL: "",
      companyURLShort: "",
      locationAddress: "",
      logoLink: "",
      incorrectTel: false,
    }
  },
  methods: {

    copyHtmlCode() {
      const userViewElement = document.getElementById("signaturecode");
      const text = userViewElement.innerHTML;
      this.copyToClipboard(text)
      alert("Signatur wurde erfolgreich in deine Zwischenablage kopiert. Du kannst sie jetzt bei bullhorn einfügen.")
    },

    copyUserView() {
      const userView = document.getElementById("signaturecode")
      const tempElement = document.createElement('div');
      tempElement.style.position = 'absolute'
      tempElement.style.left = '-9999px'
      tempElement.style.backgroundColor = '#fff'
      tempElement.innerHTML = userView.innerHTML

      document.body.appendChild(tempElement)

      try {
        const selection = window.getSelection()
        const range = document.createRange()
        range.selectNodeContents(tempElement)
        selection.removeAllRanges()
        selection.addRange(range)
        document.execCommand('copy')
        alert("Signatur wurde erfolgreich in deine Zwischenablage kopiert. Du kannst sie jetzt bei Gmail einfügen.")
      } catch (err) {
        console.error("Fehler beim Kopieren")
      } finally {
        document.body.removeChild(tempElement)
        window.getSelection().removeAllRanges()
      }
    },

    copyToClipboard(text) {
      try {
        navigator.clipboard.writeText(text)
      } catch (err) {
        console.error("Fehler beim Kopieren: ", err)
      }
    },

    companyChange() {
      if(this.company === ("WeMatch Consulting GmbH" || "WeMatch Engineering GmbH")){
        this.logoLink = "https://signatur.wematch-intern.de/resources/wematch-logo.png";
        this.companyURL = "https://wematch.de";
        this.companyURLShort = "wematch.de"
      } else if(this.company === "TempMatch GmbH") {
        this.logoLink = "https://signatur.wematch-intern.de/resources/tempmatch-logo.png";
        this.companyURL = "https://tempmatch.de";
        this.companyURLShort = "tempmatch.de"
      }
    },

    locationChange() {
      if(this.location === "berlin") {
        this.locationAddress = "Nürnberger Str. 8, 10787 Berlin";
      } else if(this.location === "hamburg") {
        this.locationAddress = "c/o The Office Group, Schopenstehl 13, 20095 Hamburg";
      } else if(this.location === "duesseldorf") {
        this.locationAddress = "c/o Mindspace, Grünstr. 15, 40212 Düsseldorf";
      } else if(this.location === "muenchen") {
        this.locationAddress = "c/o Design Offices, Luise-Ullrich-Str. 14, 80636 München";
      } else if(this.location === "frankfurt") {
        this.locationAddress = "c/o TOG Oper46, Bockenheimer Anlage 46, 60323 Frankfurt a.M."
      }
    },

    telChange() {
      if(this.tel.startsWith('+49')){
        this.incorrectTel = false;
        this.telLink = "tel:" + this.tel.replace(/\s+/g, '')
      } else {
        this.incorrectTel = true;
      }
    },

    async emailChange() {
      try {
        await DbService.getPortrait(this.email).then(response => {
          this.picURL = response
          document.getElementById("portrait-advice").style.color = "white";
        })
      } catch (error){
        document.getElementById("portrait-advice").style.color = "red";
      }
      this.emailLink = "mailto:" + this.email
    }
  }
}

</script>

<style>
.logo {
  max-height: 140%;
  width: auto;
  margin-left: 10px;
}

.signature {
  font-family: Arial, sans-serif;
  background-color: #fff;
  height: 30rem;
  width: 55rem;
  margin-bottom: 5px;
}

.right-align {
  display: inline-block;
  text-align: left;
  float: right;
}

.error-text {
  color: red;
}

.outlined {
  background-color: transparent;
  border: 1px solid #fff;
  color: #fff;
}

.outlined:hover {
  background-color: #fff;
  color: #000;
}

.copy-button {
  box-shadow: 0px 0px 10px white;
}

.copy-button:hover {
  background-color: transparent;
  border: 1px solid #fff;
  color: #fff;
}

.howto {
  font-size: 14px;
  padding: 9px 0 9px 0;
  margin-right: 10px;
}

#portrait-advice {
  color: white;
  font-size: small;
}

</style>
