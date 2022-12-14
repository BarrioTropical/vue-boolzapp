"use strict"

//array messaggi
const { createApp } = Vue;

createApp({
    data() {
        return{
            currentChat: 0,
            newmessage: '',    
            filterContact: '', 
            contacts: [
                {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                        {
                        date: '202/01/10 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                        },
                        {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                        },
                        {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                        }
                    ],
                },
                {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                        {
                        date: '20-03-2020T16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                        },
                        {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                        },
                        {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                        }
                    ],
                },
                {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                        {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                        },
                        {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                        },
                        {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                        }
                    ],
                },
                {
                name: 'Alessandro B.',
                avatar: '_4',
                visible: true,
                messages: [
                        {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                        },
                        {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                        }
                    ],
                },
                {
                name: 'Alessandro L.',
                avatar: '_5',
                visible: true,
                messages: [
                        {
                        date: '10/01/2020 15:30:55',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent'
                        },
                        {
                        date: '10/01/2020 15:50:00',
                        message: 'Va bene, stasera la sento',
                        status: 'received'
                        }
                    ],
                },
                {
                name: 'Claudia',
                avatar: '_6',
                visible: true,
                messages: [
                        {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao Claudia, hai novit???',
                        status: 'sent'
                        },
                        {
                        date: '10/01/2020 15:50:00',
                        message: 'Non ancora',
                        status: 'received'
                        },
                        {
                        date: '10/01/2020 15:51:00',
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent'
                        }
                    ],
                },
                {
                name: 'Federico',
                avatar: '_7',
                visible: true,
                messages: [
                        {
                        date: '10/01/2020 15:30:55',
                        message: 'Fai gli auguri a Martina che ?? il suo compleanno!',
                        status: 'sent'
                        },
                        {
                        date: '10/01/2020 15:50:00',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received'
                        }
                    ],
                },
                {
                name: 'Davide',
                avatar: '_8',
                visible: true,
                messages: [
                        {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received'
                        },
                        {
                        date: '10/01/2020 15:50:00',
                        message: 'No, l\'ho gi?? mangiata ieri, ordiniamo sushi!',
                        status: 'sent'
                        },
                        {
                        date: '10/01/2020 15:51:00',
                        message: 'OK!!',
                        status: 'received'
                        }
                    ],
                }
            ]
        }
    },
    methods: {
        //metodo per far le immagini dell'array con ciclo v-for
        getAvatar (contact){
            return `img/avatar${contact.avatar}.jpg`;
        },
        //metodo per far comparire la chat relativa all'avatar
        setCurrentContact(index) {
            this.currentChat = index;
        },
        //metodo invio messaggio
        sendMessage() {
            const d = new Date();
            let newdate = d.toDateString();
            const newmSentMessage ={
                date: newdate,
                message : this.newmessage,
                status : 'sent'

            }
            this.contacts[this.currentChat].messages.push(newmSentMessage);
            //pulisce il form
            this.newmessage = '';    
            //metodo risposta automatica
        setTimeout(()=>{
            const d = new Date();
            let newdate = d.toDateString();
            const newmSentMessage ={
                date: newdate,
                message : 'ok',
                status : 'received',
            }
            this.contacts[this.currentChat].messages.push(newmSentMessage);
        }, 1000);                         
        },
        //filtro
        findContact(){
            this.contacts = this.contacts.filter((item)=>{
                const name = item.name.toLowerCase();
               return item.name.includes(this.filterContact.toLowerCase()) 
            })
        },
    },  
    computed: {
        filteredContact(){
            return  this.contacts.filter((item)=>{
                const name = item.name.toLowerCase();
               return item.name.includes(this.filterContact.toLowerCase()) 
            })
        }
    },
    mounted(){

    },
}).mount('#app');