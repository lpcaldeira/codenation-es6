import sha1 from 'crypto-js/sha1'
import api from './services/api'
const account_token = '182268c3820318fb74b91d917c5964b1f6e50447'

class App {
    constructor() {
        this.steps = []
        this.api_info = {}
        // this.alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
        this.alphabet = [...'abcdefghijklmnopqrstuvwxyz']
        this.stepsEl = document.getElementById('steps')
        this.allJobs()
    }

    setLoading(loading = true) {
        if (loading == true) {
            let loadingEl = document.createElement('span')
            loadingEl.appendChild(document.createTextNode('...'))
            loadingEl.setAttribute('id', 'loading')

            this.stepsEl.appendChild(loadingEl)
        }
        else document.getElementById('loading').remove()
    }

    async allJobs() {
        await this.getApiResponse()
        await this.decryptApiResponse()
        await this.sha1ApiResponse()
        await this.sendFileToApi()
    }

    async getApiResponse() {
        this.setLoading()

        try {
            const response = await api.get(`/generate-data?token=${account_token}`)
            const { numero_casas, token, cifrado, decifrado, resumo_criptografico } = response.data
            this.api_info = { numero_casas, token, cifrado, decifrado, resumo_criptografico }
            this.steps.push('Dados obtidos com sucesso!')
        }
        catch (err) {
            this.steps.push('A API não existe ou não está acessível no momento!')
        }

        this.setLoading(false)
        this.render()
    }

    async decryptApiResponse() {
        this.setLoading()

        const double_alphabet = [...this.alphabet, ...this.alphabet]
        const { numero_casas, cifrado } = this.api_info
        let { decifrado } = this.api_info

        if (numero_casas == undefined)
            this.steps.push('Não foi possível decifrar o código, pois a API não retornou o `número de casas`.')
        else {
            const words = cifrado.split('')
            await words.forEach(word => {
                const i_alphabet = double_alphabet.findIndex(x => x == word)
                if (i_alphabet == -1) decifrado += word
                else decifrado += double_alphabet[i_alphabet - numero_casas]
            })
            this.steps.push('Mensagem decifrada com sucesso!')
        }

        this.api_info.decifrado = decifrado

        this.setLoading(false)
        this.render()
    }

    async sha1ApiResponse() {
        this.setLoading()

        const { decifrado } = this.api_info
        this.api_info.resumo_criptografico = await sha1(decifrado).toString()

        this.steps.push('Mensagem criptografada com sha1 com sucesso!')

        this.setLoading(false)
        this.render()
    }

    async createFileAnswerJSON() {
        this.setLoading()

        this.steps.push('Arquivo de resposta criado com sucesso!')

        this.setLoading(false)
        this.render()
    }

    async sendFileToApi() {
        this.setLoading()

        const blob = new Blob([JSON.stringify(this.api_info)], { type: 'application/json' })
        const url_file = URL.createObjectURL(blob)

        var formdata = new FormData();
        formdata.append('answer', blob, url_file);

        let options = {
          headers: {
            'Content-Type': 'multipart/form-data'
          },
          method: 'POST'
        };

        try {
            const response = await api.post(`/submit-solution?token=${account_token}`, formdata, options)
            this.steps.push('Dados enviados à API com sucesso!')
        }
        catch (err) {
            this.steps.push('A API não existe ou não está acessível no momento!')
        }

        this.setLoading(false)
        this.render()
    }

    render() {
        this.steps.forEach(mensagem => {

            let descriptionEl = document.createElement('span')
            descriptionEl.appendChild(document.createTextNode(mensagem))

            let listItemEl = document.createElement('li')
            listItemEl.appendChild(descriptionEl)

            this.stepsEl.appendChild(listItemEl)
        })
        this.clearSteps()
    }

    clearSteps() {
        return this.steps = []
    }
}

new App()