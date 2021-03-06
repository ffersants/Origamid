# Origamid :wolf:	
Repositório geral sobre estudos na plataforma <a href="www.origamid.com">Origamid</a>.
<h2> CSS com SASS </h2>
O SASS é uma linguagem de estilização que é compilada em CSS. Ela possui recursos que ajudam no processo de desenvolvimento de código de estilização de páginas.
<h3>Nesting :white_flag:</h3> 
Nesting é a prática de indentação do código, trata-se do aninhamento que é permitido na linguagem. 
Aliás, falando em indentação, é válido já fazer aqui a diferenciação entre um arquivo ".SASS" e um arquivo ".SCSS", ambos oferecem os mesmos recursos, porém apenas a sintaxe
os difere:
<br><br>

 :black_medium_square: SASS<br>
    - Sintaxe mais antiga;<br>
    - Não usa chaves e nem ponto vírgula;<br>
    - O aninhamento é fundamental para a correta compilação do código;<br>

<pre>
#main
    color: blue
    font-size: 0.3em

    a
        font:
            weight: bold
            family: serif
        &:hover
            background-color: #eee
</pre>

<br>

:black_medium_square: SCSS<br>
  - Sintaxe mais nova;
  - Necessita de ponto vírgula e chaves;
  - Apresenta um código mais amigável;
<pre>
  #main{
    color: blue;
    font: {
      size: 0.3em;
    }
    a{
      font-weight: bold;
      font-family: serif;
      
      &:hover{
        background-color: #eee;
      }
    }  
  }
</pre>

<h3>Import :white_flag:</h3> 
Esse recurso oferece a possibilidade de, a partir do arquivo SASS, importar outros arquivos CSS que serão compilados em um único CSS.<br>
O próprio CSS também oferece esse recurso:
<pre>
@import "meuOutro.css"
html, body{
   margin: 0;
   padding: 0;
}
...
</pre>
O exemplo acima é equivalente a especificar no HTML, mais de uma tag de importação de arquivos CSS.

```java
<link rel="stylesheet" href="css/style.css"> 
<link rel="stylesheet" href="css/meuOutro.css">
```
O ruim de importação de mais de um CSS, é a realização de um request ao servidor por cada arquivo importado, o que impactando na renderização da página.<br>

Portanto, é melhor realizar o import pelo SCSS: 
<pre>@import "outroStyle";</pre> 

É fundamental que o arquivo SCSS importado tenha o underline como primeiro caractere, por exemplo <strong>_outroStyle.scss</strong>, pois isso faz com que não seja criado um arquivo outroStyle.css, mas que somente o conteúdo do "_outroStyle.scss" seja somente importado no arquivo principal que possui @import "outroStyle", importando todo o código para dentro de um único CSS que é linkado no HTML.

