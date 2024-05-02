---
title: "Cool title"
description: "Lorem ipsum isamet consectetur adipisicing elit. Quisquam, quos."
image: "/media/articles/caixaBankArticle.jpg"
keywords: "very,cool,stuff"
date: "2024-03-09"
---

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean laoreet nulla eu eros feugiat cursus. Nullam non luctus tortor. Pellentesque rutrum mi id lacus iaculis blandit. Cras vitae porttitor neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dapibus orci magna, non pulvinar tortor egestas eu. Quisque accumsan tristique consectetur. Curabitur sodales massa turpis, et finibus massa accumsan ornare. Phasellus in molestie metus, in convallis nisi. In tempus mattis ante. Donec congue eros in orci lacinia, eget tempor nunc vulputate. Nulla sagittis posuere fermentum. Proin sollicitudin erat a maximus molestie. Nunc finibus facilisis risus ac maximus. Suspendisse eu bibendum mi, nec tempus augue. Vestibulum vitae mollis elit, at lacinia tortor.

Aliquam congue lectus risus, sit amet eleifend dui pretium ut. Cras bibendum maximus est. Quisque a neque sit amet tortor commodo ornare. Praesent sed gravida mi, id aliquam lectus. Phasellus ipsum leo, lacinia hendrerit porttitor nec, maximus nec lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce non mattis odio, non sagittis purus. Curabitur porta lobortis diam eget elementum. Vivamus vitae urna suscipit nisl venenatis tristique. In in leo convallis, tincidunt erat in, sodales quam.

Fusce eget arcu purus. Etiam at rutrum mauris. Mauris tempor ex vitae lectus blandit, id rutrum sapien rutrum. Maecenas cursus lobortis ultricies. Fusce id bibendum orci. Morbi ut nunc ultrices tortor venenatis mollis in ut lectus. Nunc sed faucibus ligula. Sed pretium tincidunt suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.

In imperdiet nisi metus, quis egestas mi eleifend id. Aenean sodales ultrices lectus, eget posuere lectus gravida eget. Morbi lorem risus, eleifend non pharetra tincidunt, auctor non dui. Fusce pharetra sagittis aliquet. Curabitur a blandit dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam sit amet posuere dolor. Mauris posuere dolor vel fermentum laoreet.

Proin non gravida enim, sit amet tempus ipsum. Fusce mattis pretium diam quis iaculis. Nunc sed leo et est dictum euismod nec a mauris. Pellentesque pulvinar, erat nec commodo eleifend, lorem tellus fermentum nisi, vitae finibus urna eros eu quam. Vivamus cursus scelerisque odio nec consequat. Fusce suscipit, risus eu vehicula laoreet, erat nibh pellentesque diam, vitae viverra elit augue at magna. Quisque ante libero, eleifend quis neque sollicitudin, consectetur pellentesque augue. Suspendisse lectus augue, semper nec elementum eu, luctus a tellus.

Here is a sample of some basic Markdown syntax that can be used when writing Markdown content in Astro.

## Headings

The following HTML `<h1>`—`<h6>` elements represent six levels of section headings. `<h1>` is the highest section level while `<h6>` is the lowest.

# H1

## H2

### H3

#### H4

##### H5

###### H6

## Paragraph

Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur? Quianimin porecus evelectur, cum que nis nust voloribus ratem aut omnimi, sitatur? Quiatem. Nam, omnis sum am facea corem alique molestrunt et eos evelece arcillit ut aut eos eos nus, sin conecerem erum fuga. Ri oditatquam, ad quibus unda veliamenimin cusam et facea ipsamus es exerum sitate dolores editium rerore eost, temped molorro ratiae volorro te reribus dolorer sperchicium faceata tiustia prat.

Itatur? Quiatae cullecum rem ent aut odis in re eossequodi nonsequ idebis ne sapicia is sinveli squiatum, core et que aut hariosam ex eat.

## Images

#### Syntax

```markdown
![Alt text](./full/or/relative/path/of/image)
```

#### Output

![blog placeholder](/blog-placeholder-about.jpg)

## Blockquotes

The blockquote element represents content that is quoted from another source, optionally with a citation which must be within a `footer` or `cite` element, and optionally with in-line changes such as annotations and abbreviations.

### Blockquote without attribution

#### Syntax

```markdown
> Tiam, ad mint andaepu dandae nostion secatur sequo quae.  
> **Note** that you can use _Markdown syntax_ within a blockquote.
```

#### Output

> Tiam, ad mint andaepu dandae nostion secatur sequo quae.  
> **Note** that you can use _Markdown syntax_ within a blockquote.

### Blockquote with attribution

#### Syntax

```markdown
> Don't communicate by sharing memory, share memory by communicating.<br>
> — <cite>Rob Pike[^1]</cite>
```

#### Output

> Don't communicate by sharing memory, share memory by communicating.<br>
> — <cite>Rob Pike[^1]</cite>

[^1]: The above quote is excerpted from Rob Pike's [talk](https://www.youtube.com/watch?v=PAAkCSZUG1c) during Gopherfest, November 18, 2015.

## Tables

#### Syntax

```markdown
| Italics   | Bold     | Code   |
| --------- | -------- | ------ |
| _italics_ | **bold** | `code` |
```

#### Output

| Italics   | Bold     | Code   |
| --------- | -------- | ------ |
| _italics_ | **bold** | `code` |

## Code Blocks

#### Syntax

we can use 3 backticks ``` in new line and write snippet and close with 3 backticks on new line and to highlight language specific syntax, write one word of language name after first 3 backticks, for eg. html, javascript, css, markdown, typescript, txt, bash

````markdown
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Example HTML5 Document</title>
  </head>
  <body>
    <p>Test</p>
  </body>
</html>
```
````

Output

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Example HTML5 Document</title>
  </head>
  <body>
    <p>Test</p>
  </body>
</html>
```

## List Types

### Ordered List

#### Syntax

```markdown
1. First item
2. Second item
3. Third item
```

#### Output

1. First item
2. Second item
3. Third item

### Unordered List

#### Syntax

```markdown
- List item
- Another item
- And another item
```

#### Output

- List item
- Another item
- And another item

### Nested list

#### Syntax

```markdown
- Fruit
  - Apple
  - Orange
  - Banana
- Dairy
  - Milk
  - Cheese
```

#### Output

- Fruit
  - Apple
  - Orange
  - Banana
- Dairy
  - Milk
  - Cheese

## Other Elements — abbr, sub, sup, kbd, mark

#### Syntax

```markdown
<abbr title="Graphics Interchange Format">GIF</abbr> is a bitmap image format.

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

Press <kbd><kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd></kbd> to end the session.

Most <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and other small creatures.
```

#### Output

<abbr title="Graphics Interchange Format">GIF</abbr> is a bitmap image format.

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

Press <kbd><kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd></kbd> to end the session.

Most <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and other small creatures.
