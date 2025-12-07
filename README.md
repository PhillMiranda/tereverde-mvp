<h1> > Read Me < </h1> <br>
[requisitos_tereverde.xlsx](https://github.com/user-attachments/files/24009786/requisitos_tereverde.xlsx) <br>
[requisitos_tereverde PDF.pdf](https://github.com/user-attachments/files/24009787/requisitos_tereverde.PDF.pdf)
    
                                       ### PROPOSTA ###

A geografia do território municipal de Teresópolis é caracterizada por terrenos montanhosos entremeados por vales. 
A área urbana encontra-se em um planalto a 869 metros acima do nível do mar e é delimitada por três unidades de conservação: 
o Parque Nacional da Serra dos Órgãos, o Parque Estadual dos Três Picos e o  Parque Natural Municipal Montanhas de Teresópolis. 
A existência das unidades de conservação proporciona ao município o turismo ambiental, em especial de montanhismo, e também limitam o crescimento urbano.
Teresópolis é um destino turístico popular, atraindo visitantes em busca de belezas naturais e atividades ao ar livre, como trilhas e escaladas. 
A proposta do Circuito Terê Verde busca promover essas atrações,  destacando a rica biodiversidade e as opções de ecoturismo disponíveis na região. 
A plataforma “Terê Verde Online” permitirá que os visitantes tenham acesso a informações atualizadas sobre a biodiversidade, trilhas, cachoeiras e eventos que ocorrem nesses espaços protegidos.
Com uma interface amigável e recursos interativos, o site se tornará uma ferramenta essencial para turistas que desejam explorar as belezas naturais de Teresópolis de forma consciente e atualizada.

## NOME DO PROJETO: TERÊ VERDE

## PARTICIPANTES DO PROJETO: Pedro Ventura (06013296) / Phillip Miranda / Rodolpho Marcário (06015421) / Gustavo Toledo

## Ferramentas: 

 > HTML
 > CSS
 > JAVASCRIPT 
 > API - Clima/Tempo
 > Vercel 
                                           ## REQUISITOS DO SITE ##                          
# REQUISITOS FUNCIONAIS

O site deve permitir o cadastro de novos usuários, autenticação por meio de login e recuperação de senha, possibilitando o acesso seguro a áreas específicas. O sistema deve exibir de forma clara a lista de parques, trilhas e pontos turísticos disponíveis, permitindo que o usuário visualize imagens, informações e detalhes de cada local, sendo nesse caso específico para três parques, O Parque Nacional da Serra dos Órgãos(PARNASO), Parque Estadual dos Três Picos (PETP) e Parque Natural Municipal Montanhas de Teresópolis. Também deve disponibilizar um formulário simples para solicitar o agendamento com guias, coletando dados como nome, contato, mensagem sobre o que tem interesse e se apresentando além do destino de interesse. Além disso, o site deve oferecer navegação intuitiva entre suas páginas, como Home, Sobre, Cadastro e Login, além de apresentar elementos interativos como carrosséis de imagens e botões funcionais para Login e Cadastro por exemplo.



# REQUISITOS NÃO FUNCIONAIS 

Esse projeto deve oferecer uma experiência confiável e agradável aos usuários. Isso inclui ser totalmente responsivo, adaptando-se bem a diferentes tamanhos de tela e navegadores, além de apresentar carregamento rápido e navegação fluida mesmo com conexões comuns. O site deve manter uma interface clara, intuitiva e visualmente coerente, garantindo facilidade de uso por meio de textos legíveis, botões acessíveis e organização consistente, além da paleta de cores verde escura escolhida para representar a cidade de Teresópolis . Também deve adotar práticas de segurança, como o uso de senhas criptografadas, proteção contra acessos indevidos e tratamento sigiloso de informações pessoais. Além disso, o código deve ser estruturado de forma modular e fácil de manter, por isso, utilizamos poucas liguagens e organizada em tópicos, permitindo futuras melhorias sem comprometer o funcionamento atual. Por fim, é importante que o site seja estável, esteja disponível a qualquer momento e ofereça acessibilidade básica, permitindo que pessoas com diferentes necessidades consigam utilizá-lo sem dificuldades.


                                     #\\ REQUISITOS DA TELA DE LOGIN E CADASTRO //#

# Objetivo da tela de login e cadastro

Tem por objetivo permitir que o usuário acesse o sistema de forma exclusiva, inserindo suas credenciais (e-mail/usuário e senha), para que em nosso site, 
ele consiga se comunicar de uma maneira além de segura, mas uma forma pessoal e direta com profissionais que vão auxiliar o usuário a ter uma melhor orientação
em cada trilha que deseja visitar. 

                                  # REQUISITOS FUNCIONAIS DA TELA DE LOGIN E CADASTRO: #

Requisito Funcional 01 - Exibir campos de autenticação; 
A tela tem por objetivo fazer com que o usuário entenda que ele precisa preencher dois campos, 
dessa forma apresentando dois campos ao meio da tela, o campo de e-mail e/ou usuário e campo de senha. 


Requisito Funcional 02 - inserir login e senha; 
O usuário deve conseguir inserir / digitar o e-mail ou usuário e a senha respectivamente e obrigatoriamente.
(Sendo este último, em formato de asterisco para manter a integridade e segurança).
Caso ele opte por preencher o “e-mail”, este deve estar em formato padrão de e-mail “exemplo@exemplo.com.br”.
Caso opte por preencher em formato de “usuário” este deve ser ser exatamente como cadastrou anteriormente, 
levando em consideração letras maiúsculas e minúsculas. 


Requisito Funcional 03 - Botão ENTRAR e CANCELAR;
 - O botão ACESSAR, servirá para, ao clicar, autenticar o login e senha que o usuário anteriormente preencheu. 
E dessa forma, em caso de autenticação positiva, será redirecionado ao site, de maneira personalizada,
o usuário poderá se comunicar com o suporte do site e também com os guias cadastrados na aba “Guias”. 
 - Caso o usuário clique no botão sem o anterior preenchimento dos campos login/senha, apresentará uma mensagem 
escrita “preencha este campo” apontando para a caixa de Login. 

 - Ao lado direito, o botão “CANCELAR” será usado para redirecionar novamente para home page do site, em formato de visitante. 


Requisito Funcional 04 - CheckBox “Lembrar Senha”;
 - A tela de login terá um “CheckBox” com a opção de lembrar a senha, no qual, ao selecionar, 
as informações de Login daquele usuário ficarão registradas na memória cachê (a título de apresentação, entretanto, para um projeto completo deveria ser armazenado em Banco de Dados). 

Requisito Funcional 05 - Opção “CADASTRE-SE”;
 - Terá na parte de baixo da tela de login, o botão “CADASTRE-SE” que servirá para redirecionar um usuário a uma tela de cadastro, 
onde apresentaram as seguintes caixas para preenchimento:
E-MAIL, TELEFONE, SENHA, CONFIRME A SENHA;  

Requisito Funcional 06 - Opção “Esqueci a Senha”;
 - Apresentará uma última opção na tela de login que será o botão “Esqueci a Senha” em formato de hiperlink, 
no qual ao clicar, o sistema deve redirecionar para uma página onde o usuário irá preencher o e-mail que cadastrou, 
e dessa forma, irá receber um e-mail com link para redefinição de senha. (Não foi implementado ainda)


                       # # REQUISITOS NÃO FUNCIONAIS DA TELA DE LOGIN E CADASTRO # # # # 


> Requisito NÃO Funcional 01 - Logotipo do Terê Verde; 
 - A tela de login, assim que clicada, vai apresentar primeiro e de maneira centralizada o LogoTipo do Terê Verde. 
Dessa forma, trazendo uma beleza e simplicidade a tela. 

> Requisito NÃO Funcional 02 - Caixa de Login e senha; 
A caixa de login/senha irá aparecer de forma centralizada, com as palavras “Login” e “senha” respectivamente uma embaixo da outra, 
com as respectivas caixas para preenchimento ao lado direito de cada palavra em formato retângulo.

> Requisito NÃO Funcional 03 - visual da tela de Login e dos botões; 
 - O botão “ENTRAR” aparecerá abaixo da caixa de preenchimento de login e senha, em negrito, 
escrito em cor branca dentro de um retângulo verde   [ #293B14  ]
 - A mensagem “preencha este campo” estará com um emoji de alerta ⚠️.
 - Ao lado direito, terá o botão “CANCELAR” aparecerá ao lado direito do botão acessar, em negrito, 
escrito em cor branca dentro de um retângulo vermelho.[ #ff3838  ] 

> Requisito NÃO Funcional 04 - Opção de Cadastrar e Opção de Recuperar a Senha;
 - Irá aparecer em formato de hiper link, com a cor verde clara para poder identificar, no rodapé da tela de login. 
