/* eslint-disable */
var img = new Image();
window.phetImages.push( img );
img.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJMAAABkCAYAAACCcgK0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAFzdJREFUeNrsXQd0XNWZ/mbmTdUUjcbq1WqWm2RLtlwIGGzAFBNiCMUBFgi7SYBls8lJstnsYUnZTThZkg3ZBVIICwEChBCMMXacuMcIY1mWLdtqVrHVLY00GpXR9Nn736cnFBuMJM/IGuv9c+5589pt73v//93/3SJ88ZDjuwCewFTFMwJo9ZBFFmEqNwVrPkSovQFdJyqQoPJDuO2foEjNlWtzlotyKjeFmo5zQLVUHhT3e9rkmpRlamBSxKf+LbiYlpJFlqmBKTWPb2NiYjA0NIRg+ym5JmWZKphEfpSTkwONRsNJeGigT67N2Q4mBYFjCkHJtBMB6ezZs2JMTDtNNS45XB5B4GiaKm9iACIwpaenc96kXLBCfj3HyWBnC053/BlnFLsxhHYMomPsXDKWw4QUZIbWIavkxsvDNTBFLEGVlovA0b1cO3m9XmhHNZMsIog+6PxPnE7ZByxTjTujGfvXiWM81GM7TBVPoiT0KPJL7oxyMCkUUwRTPt8mJiaK2om406ADCnPcrAbS4Yr/RkXKL4ASApFqYuArsWMvvofjFS9jffKzMKVkzDLOpNVDGZ/GwUSBJNg2u3nT3opvoKLk18yGqab0MHpLmvCW4jb0dZ6MyvIrlaNNuqkEIU1s1UkknFwEFxNfNIc9DEh1Jdsu+u32JLuwBfdzQEVdPZCVm2oQcgp5BZCviYK/sQoXE1+0hqojz4cFSOMBtXvw2/AOOaOqHpQXo9bUaaLzMikpCa2trQh5RhDsaZtVps076ES58bmw8w97fiOq6l+ILjN3sWhUM+1ktVoxPDzMK8HfeDxiyL9S04HvGT9AevcR9NYfnxFvY3n9z+DJH4kIoT1mfCWqtJPyYtGoThe107Jly/jWR6YuQshv9+ngG+zDK197CK9tuhIHn37ikr+NNaHNEWsdEUhr696MIqflRXqHNDlFcO19i3Mmn88HK68FN2/thVtaYEOT3YOTdWf4fuM7L2K4pR6rv/UUjIlp513vGx6Es7mW/9fFp7BrUj823rm9jawVr4JDb0W/1jLh/DQe3gZPiSeize0m7EIx/iFa/EwXGYElDiqzDUbysRw+zDUUaSfdwsh4w3/ekYJgKAi1IECr1cJZdxQ7Hr0Vi+99DOlXXM8ANICeE4fRsvudMSCReL0+lH79R8guLmVNWAVUXbVobu3G420HMFfrh8JogsJkxFsLN+JIQuGE8tKD2og/oLZQORRR4g0WwpFPTW4hRo7s+UgjNB6DPkJgsuUuQPE9D8NRU4kAkX2qaT/TVi8+heqXfvKJ96kFFcp/+m3EZyuQbFRhyA/s2N+Fx9YVIZgSDwUDm9flgqbyh8j5wuNoSlr46SR5GsCEFBUGO1pgjgJHZljARMAhMBERdzgcsDZU8Z4EigiYOp3Jgmu+8ST/X/36s6h+7VlcyIsfCgbhD/jh9/kRYNsttSF8Zs0qnDpaibuW25DIzPzBpg4sSbFBbzEhT61EoOxtNN/26WDydDhYAt7JFSBfAEyT6KyRrMJAZQss0QAmZRjQpElI4xyJuqSMmRVm6iKlnSRZtOkRpK1cywD1HNo/3D0OQSGoDEakrd0It9OBhu2vIchARUUNMeCVV9bitZ8/gbnxBuz/4UtQnu1Ej2YQqeya3BgD3I2VqJxAvXy32YUvnrRPOL+/9xTgLqbPUKKZVDnHWkqX6+eUc4M2t4hHWFVVJb61DcempQVhnVuAK77zNG7+9Q7EL1yGYCDAPzzn3PEw1NYExC1azrAVYjxJyTi2Cj95/EtYtSAdWSYNlK0DqNApkA0NAkMBnLUPw98/gDnJWRNKe2QSZJ2A9MNFv538E+oMIJZppSjxMykQjqDPFUmrWq3mps7NTB05McMV/4VC867N2P7Y59B+5H243W54PB4c/t/Hkacox+dMr+BfHtAjzixAENSIs1rQPzCE4Oke6E8HYPeFsMuoRUvvCPa0OeDq9+HgohsmlG5nUuGkgKTSmSYPpg4GptTMaanHiw1h00z6vKIxU9fY2Chqp3N8TnpFIKxvQvPOt/HOA2tx4L++iUF7D9weN+dHZBZUTBNdadyD9TmnkDg3E3fckQO1VoNXN+9DXk4Gvvrbt+AQ7Lh/7XJ45urxm75uzA1pUHbNvaguvn5i6WdeGVkgMclQlEaTnyl8QoAKnjjIiTiJ+1QVjAtX8v9XCr3Y9dKLUGx4EGrL1LupuAedqHrzN2ja/juMOPvh9zNiHQyM2uzxb4oSL2xh5Pv6H6M8cSN6TxyC6s0HUHGigZu8vr5+fM1aB3tCHhKLvwJ7zHHsuOcRTvAnWidZyz6DP71pwQ0mZ0SAxPm6ch2UiA4RwunDiFm0EsMMTBIRH2G8KeQd4RorVunH6eZ2JNSdgHXFVVNOY+u/P4z63VthNhmZ2VKxN4LUq3LUpa/gQFEybqRUqnCqTYW39ihgmVsHjdGChKJV6K+p4NeZWcst5rpNWLD6Oh7vvLUbppSfstJHcEPNjyICJF29HkXz74waP5MynGpOn54HwWITK7msjG8JXHRuIKTm+0MMTJON19HZjdqyCuz65atw9fpEoI64OYi4A1IlkmuB8TW1RsuChnM3Olb/0o9FLhdjgoG85CzCINNkpMX0ZutFl3lk/SM46LaEHUgkpa77oGeaMmrMXLhRb2BEfKBijzhqZRRMlmXXUKMcc6wm2M80cGKu1F3YBzXU50R9xQk0VZ5EcNgFI+M7MTotFpTeiJ769+EZGeJxqgQRNKSNVEwbSWZOAhi8bhz/6dcx0tPBQRRgzf8Aa/EFA0GE2P7Fll9vtmD7+idRsPNhxKrDB6SkU7lYMf+hqNFKCDdnIiHgEJio9yURcTJ4vu42NCTGIz/FBrtjEH0f7kfCmvUf7wgc8aCGaaHKXWUwaASYGIBirGbodTro9AauefJKN+DEvtfhcntgi4k5B0QqDiTiTOQSIP/S0NlWDh4CEfGrAPtvychFalGY/GBr7sGLpw4gpbkiLEDSdRpwq/VJGMwWRJMoFQjvT2OZA21CGh+xImkn95HdXIMULSng+/3Hyj/2XtJC+194A3a2TY8zIyUuFglxVsTFxcFoYSZJ0GHYG4Jt/nVQ64xwuUZIOXEAqdUCT08QBK50OWhI82h1cDPQebxeeH0+/jGa3Ywbvv/LsJbb+fe/wK+K/yMsQHpA/TKSUxdDEWU/ZST6tViWreUVQ4AiB+IdpadwXegpllwfSnOT4OvvY4A6NHZ99+k27H/5j2j762GmaSww2RJhttpgs82BgXGGkEqHIU8QDpcP9mEf3EYzbItF4jwwMDjKj8Q5OETNQ59PfMi66mZc/a8/4/sEIsqLx+3FTT/4JWJT0sNe7qs+vx5Z5np4+9unBKSsyiV4WPMOktMWRWWPUyESJtmUXwT7Lj0GenvQ1NQEuz0exlgBNf1eFOen4FBDF6xdjVhhWoGahjbs27obJpMZbpMNrS4vgqog8mONzEQxxaPWQhtrwpwkG2KYttLFaHD0vb3QLLsRjpO74BwYgJVpL41GzU0aecCtWfOw4kvfRtLi5ehpqIbX4xN5EgPa9d/5KTKKV0VM1S+5di2yOlpQVXYSXQOx0MSmfuo9sUfisVb4RyxZdTeiWSICJpVWDyMDVPD4Qd7P6Q+bncz0mZD54P3oGT6D0voO3Hvv7YzTeJGZacYBWwLO9LswyPaTjRrkZaUiKTcDamssFAbDWLx1ByvRfqQaMQYTAoIetpV3o2P3r9DZ2YWU5CTOkRbdeh+W3vMoNDGiuUnIXcC0kpef436bNTdGfHyfNSUDaz6fgX4GqtPV9bD3eJhJDsDp9AJOH3QKE5IV85GsLECWcgXmr74Jl4MIkfqAGLd8LQaOHxzziBMRd7eeQltGNlYvyUFVVTWSU5KZWQrBlBaHOTYjVuVlIC4pngFBfx4p/+DtHQjY+2GOtaF9yIterwcpRaugbDuEtvqjGGTaZ+MPnkXWqnXn5SWeAar71En+v6fhJDKLV09L5calZvDwt3IbLlcRIvWW6hkJN2Tkg0bU0WwpJI7DuxGTkYf+lPloPPA+9Ia16FNosGDNcuR/gr5ob2rBX1/figTWsjEwIDU73RgM+pBs1qAwxQrz957B0bLtKLplE6ypH99NIzF/EQNRDW/tDXS2ySOPo8EDfh4XWLwSrpZ6EUgOB1B/DH5nL+ptBShOKMf/PP0MbEtKkbVx03kPeMgxgKO7P0B3XTPSExIRUGnR3D+CEfiRazOgINWGOQvzoUmMxzVFF/7gmr/mBlTveIu3+Ny9XVHlu5nVroHxP2vhKqgtNt5klz7+9hzYBi8EKOcVIS/Fht6jh1jrzjF2j5+1tqr3lWPv828i2DOAuIRUtHsUqHcOw6P0ozDJjMKCTCRfsRzaxIQJ5UNtMDIw96O72459r/wq6prc0fJTXf/od65mL+rVkXKx808fZ+rgs9vxTQaouccr0MlI8qA5CauD7fiwvhMB9wgyFi2Gr7MTe3+3DT6ni/trenwh9LDmvEIIQqEMYXl2EgpKFyOuIA9KQZhEHhSIcZ1Foj6EmNRsFN58lzwFTjR8TjmPhDLt1H1gK/6Z/b9yVDu1vfc7OD7/EBQ5i2AzVSPO1Yc754SwudaJoNqIMy4PfAov0ix6LE9NQlJWCvTJiVDFGKaUB1taBr781UdREjuMY8FU1MlmLroI+FgCOj3il69D7ZnTfN/FTF5t9SHEu7+AM7HZWF+YDoc5k38amZdqhsD4ULYuFnOz05CQmgCN2RiWfDTFL4dNeRqmQEAm4NFIwMea5qVrUV2+C3933328W28hjdYr3w3hqpuxbukS1LUNYnh4BAYhhDs2XoV+lSYi+TgcyoKW8S4ZTBEi4NMxO4aaaaeEUtH/I01y0cPA5WMtu+o5C5Gj98LpHET3kBtOpTqiefER+QfkEIkwXeQscflaRqoNfJBmbW0tJ91d+99Dt8qC4w2teG/zZrz+4stib0mZzEYrAZ8epS/oDUhk5q5j/9axycEU7YewYU4a3hhqRJI6ETVO1nyvLEdicalsM6LTzzR9yE1ipo60E/UmICdmyVIdDv+pErd/5VosXLoYBp0WTdv+yLWW/KbPspnjpsKdkkrF7ik0n9Mf/tgMf6AT71WnoSt7BWvZpcHPgFT96vMy/4hKzjTNfV7S12yANtaGwsJCVBypxo6dw6h55w30am1IW70GK+elob+5AV2Vh2blLHTRHFQbHvu3iHrAP3b0b+wc9J48DL1ez+fDNBt0EJj5G8lfhcKiAhQafBhW6aBOyZLNh+wB/xSPdEERLFkfTf3MveKMmNPxWqa1tMU3wiRo4ZcdQjIBn0jI++z9Y5kgR6bf7ULzDnGWNK/OjAADk/y2R9tyF5fIH6xnpi5jzS1o2fcu3xenfz4KR90x2OYtkV/zqNRMl5Cw0XQ4ulEyXlNTwzv817/zEgIel0xoozAoL6VaVDPSXXDrAxzV0gSrZO6q33hONhsyAZ+8xM7NZxpqHdoO7uKOTN4jk0n7h7v4cVmiqNfATJhhY+7VG2CvPcpn6t27dy+fRaXhT7+HlbX4TEnp8lOSW3MTDxpm7grvfnjM3NGsvSTHX38OAWb2ZBMif+idlJiTM5B/452o3/57PjyKyDj6e1G9+SUUbXpEfu2jwczNJL9g5spr0d9cz10E1OeJL6HBzF/z3neRffUt8tOa6WZupn0sXLTxAehjbTAajdxdQKBq3PMuOo+WyR9S5Q+9kwsavQFLv/AIdxsQfyLvOJm8E2+/iMGzrbI/R/YzTS5YWAtuPuNPNN6OHJqcPzEpf+EnGOxqlcnuDA3KmYrytOLVWHDTXdzcSSbPx1p2hyRAyZpg5mmmmWyDs1etQ9pScZIJmvCL5skkQH1IgOpslTnKjONMM3zI8dLbHkQ6A5S0sDT5oAhQBxmgxEko5N9M+QnRMInD0tsfHBtrTq07EgLUBy88hdUPfQOWZNlLLnvAJxGKmYbKYDyK+BN1V5E0VNlvnkJXzVGZAM8ED3g0rBYkSQlpKJIjZbylRxyK3AeHXn0GixlZz73iWlk9yB7wicsyBijFKKDmz5/PR7nQ55fj296Ak7XyaIYT+tYniwymCQMqxjoH1bu28B4GBCgyfwQwJ2vl0flYmUddAjBFaaf9BetuYYCyofwP/8cHdRKHoukO57Nz+59/ip/Pk83etIpiS6vnu2z7RLQWoJ9porJXnsGww841FAmBiyQ+ex5Kb/8iDFab/KSnQVT3fP3xaR83F9bFf0wWZJWsRl9rE4SgDxaLhbf2qMcm7Z8q2ymumJmSzhcvlFtdEQzvtUW3Zhov9e/vxImdW+B1u/gcmgQq+rZHfIo+HBdvuBtzS1bLKiRSZm7bZQQmEgcze0e2vo7upjr+gVhq7UlCxH3xus/KoIoEmLa3X15gkqSOaanjpKVGXHyf+pbT5xhyJ0igymaAKmAkXa2XXQlhAdOOyxRMJGTuKt59A40V7/N9MnvU+6CoqGhs6VeStIVLkcOAlb5gqYyIiwHTny9jMEky5OhFFdNSEqgkYEkmUAIWdcwjQCWyViAFo9wKnByY/tLhvezB9BGo7Dj2l49AJXEqavlJg0DHi5GZQgJVHGsJ0uI6ccnpHHCyfAKYds4iMI0HVWNFGRoOv8//S0ItQGkQKPEryV91riQxgBGo4lLEtVoIcOPPTXdZSPOem79LAqbdnbMPTOOl5WQlzrBAW4msS2ZQWhqWAEbedeqgJ00BNFEh7RYOc9nHWqnj83chueHL30JyzvQDSlBgdksmI98USAhUXY116GyqHTsvuRXGhl4x4V2IR1fWlPqpjz9PxyQeJmoOe3gbFixdCeBSl5zxx3g32ktQl7MeTOMli4EqaxRYpAV6mTYgcPV2tHBA9HaIn2sk98InapG+Pg4mesjiVEGiSMvMjj+WnZ3Nt7Ri6IWOST1NabSOtD9eJFBzc4NLAybFvq7ZbeYmbW4YoDwMaH0MYB73CIb67Bgc1TwcgKOAm04516St+uwm3miYds3kaT0GpVIFWoY7GAzxNdmUSnE6Cxo67vF4+Hmv389X6aZzNKRFqVLxa0IBP18b1+v18bfD43HDYDCAVjGlNXHpejrP90MBCOw+j8fHIldBp9PxYQ0Bv7ggM62jSws3qwQVXxVcPOZneRJXBQ+FgiyOEE+flpMnofzSf0qLFn72+wPws3ukYTd0jBKnuGlhVVq2XrqWykdpSP9JAkExXrqfr/kbFJezp3Roa2blCelDSMjL5PtKVQHPP7+HyhoK8LRI/Oy4vaVpLF8+n5+VQ8X3BZUYXyDo50u+UqA80FaMh6U5uhI6xaM3x8KakASvx8vrggIdp0BqiD87QcPjUCpccJ2p4s+Lzmu1Gqg1Yhnpfp9ffFaUFi2MTdfRyuparRahIK2gJT4z1egzpjqifa1Gy+Lz8fNUBrpfxf5TnVGZBUfllrH1a6XxaTRxqViRYsXSA/QHxH0pE5R5euLa0UrmFUtAY8Hh9/PCUgK8cJRggICl4IBQsAcaCCj5St8aBhR6+CF6aKHgWKVSJUj3U35GRkb4tUoVu489GIqfCksFJfAFA0F+jlcYKwedc7lcvAKosglEAgGP3UvpUJ7oGKVN11K6akE9Vg/8GoWSxy89PK/PyyucP0CxytgmxP9T2pQegY4fpYpm8QosHYHAyvIXcHv4eKAgO+5m+5RvlUoxVq/04ipGQall91D5KX0SR4sbA+w+Sp+/GCER5FL90susYPmleDgQWNkoi67hIZaO+FyoDCKwxTJTkOISX2QVj4/ioDqgQPf4RgFH8ZICEJ+lWNfSS8iv7W6sPE9dOWeYaXGfs50UWb1EeY2UDH/KeVeE0x+8wDklZJElTCKDSRYZTLLIYJJFBpMssshgkkUGkywymGSRwSSLLDKYZJHBJIsMJllkkcEkiwwmWaJM/l+AAQCrkZYJa5/NGwAAAABJRU5ErkJggg==';
export default img;