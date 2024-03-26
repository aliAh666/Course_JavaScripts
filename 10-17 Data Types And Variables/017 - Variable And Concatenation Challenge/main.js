
/*

===========================================
== Variables And Concatenation Challenge ==
===========================================

[1] Create 3 Variables [Title, Desctiption, Date]
-- All In One Statement
-- Variable Name Must Be Two Words
-- Title Content Is "Elzero"
-- Description Content Is "Elzero Web School"
-- Date Content Is "25/10"
[2] Create Variable Contains Div And This Div Contains
-- H3 For Title
-- P For Paragraph
-- Span For Time
[3] Add This Card To Page 4 Times
[4] Use Template Literals For Concatenate

Extra
- Use ES6 Repeat

*/

let [varTitle,varDesctiption,varDate] = ["Elzero","Elzero Web School","25/10"];
// -------- OR --------
// let varTitle = "Elzero",varDesctiption = "Elzero Web School",varDate = "25/10";

let markup =`
<div class="card">
        <div class="child">
            <h3>${varTitle}</h3>
            <p>${varDesctiption}</p>
            <span>${varDate}</span>
        </div>
    </div>
`

// document.write(markup);
// document.write(markup);
// document.write(markup);
// document.write(markup);

// -------- OR --------

document.write(markup.repeat(4))