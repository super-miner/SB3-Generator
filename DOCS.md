## Modules

<dl>
<dt><a href="#module_block">block</a></dt>
<dd></dd>
<dt><a href="#module_blockComment">blockComment</a></dt>
<dd></dd>
<dt><a href="#module_broadcast">broadcast</a></dt>
<dd></dd>
<dt><a href="#module_costume">costume</a></dt>
<dd></dd>
<dt><a href="#module_list">list</a></dt>
<dd></dd>
<dt><a href="#module_metadata">metadata</a></dt>
<dd></dd>
<dt><a href="#module_project">project</a></dt>
<dd></dd>
<dt><a href="#module_sb3Generator">sb3Generator</a></dt>
<dd></dd>
<dt><a href="#module_sound">sound</a></dt>
<dd></dd>
<dt><a href="#module_sprite">sprite</a></dt>
<dd></dd>
<dt><a href="#module_textToSpeech">textToSpeech</a></dt>
<dd></dd>
<dt><a href="#module_toBeImplemented">toBeImplemented</a></dt>
<dd></dd>
<dt><a href="#module_utils">utils</a></dt>
<dd></dd>
<dt><a href="#module_variable">variable</a></dt>
<dd></dd>
</dl>

<a name="module_block"></a>

## block

* [block](#module_block)
    * [~Block](#module_block..Block)
        * [new Block(opcode, inputs, fields)](#new_module_block..Block_new)
        * [.nextBlock](#module_block..Block+nextBlock) : <code>Block</code> \| <code>null</code>
        * [.nextBlock](#module_block..Block+nextBlock)
        * [.previousBlock](#module_block..Block+previousBlock) : <code>Block</code> \| <code>null</code>
        * [.previousBlock](#module_block..Block+previousBlock)
        * [.parentBlock](#module_block..Block+parentBlock) : <code>Block</code>
        * [.parentBlock](#module_block..Block+parentBlock)
        * [.sprite](#module_block..Block+sprite) : <code>Sprite</code>
        * [.sprite](#module_block..Block+sprite)
        * [.asShadow()](#module_block..Block+asShadow) ⇒ <code>this</code>
        * [.withNextBlock(block)](#module_block..Block+withNextBlock) ⇒ <code>Block</code>
    * [~Block](#module_block..Block) : <code>Block</code>
        * [new Block(opcode, inputs, fields)](#new_module_block..Block_new)
        * [.nextBlock](#module_block..Block+nextBlock) : <code>Block</code> \| <code>null</code>
        * [.nextBlock](#module_block..Block+nextBlock)
        * [.previousBlock](#module_block..Block+previousBlock) : <code>Block</code> \| <code>null</code>
        * [.previousBlock](#module_block..Block+previousBlock)
        * [.parentBlock](#module_block..Block+parentBlock) : <code>Block</code>
        * [.parentBlock](#module_block..Block+parentBlock)
        * [.sprite](#module_block..Block+sprite) : <code>Sprite</code>
        * [.sprite](#module_block..Block+sprite)
        * [.asShadow()](#module_block..Block+asShadow) ⇒ <code>this</code>
        * [.withNextBlock(block)](#module_block..Block+withNextBlock) ⇒ <code>Block</code>

<a name="module_block..Block"></a>

### block~Block
**Kind**: inner class of [<code>block</code>](#module_block)  

* [~Block](#module_block..Block)
    * [new Block(opcode, inputs, fields)](#new_module_block..Block_new)
    * [.nextBlock](#module_block..Block+nextBlock) : <code>Block</code> \| <code>null</code>
    * [.nextBlock](#module_block..Block+nextBlock)
    * [.previousBlock](#module_block..Block+previousBlock) : <code>Block</code> \| <code>null</code>
    * [.previousBlock](#module_block..Block+previousBlock)
    * [.parentBlock](#module_block..Block+parentBlock) : <code>Block</code>
    * [.parentBlock](#module_block..Block+parentBlock)
    * [.sprite](#module_block..Block+sprite) : <code>Sprite</code>
    * [.sprite](#module_block..Block+sprite)
    * [.asShadow()](#module_block..Block+asShadow) ⇒ <code>this</code>
    * [.withNextBlock(block)](#module_block..Block+withNextBlock) ⇒ <code>Block</code>

<a name="new_module_block..Block_new"></a>

#### new Block(opcode, inputs, fields)
<p>Creates an instance of Block.</p>


| Param | Type |
| --- | --- |
| opcode | <code>string</code> | 
| inputs | <code>Array.&lt;(string\|Variable\|Block\|null)&gt;</code> | 
| fields | <code>Array.&lt;(string\|Broadcast)&gt;</code> | 

<a name="module_block..Block+nextBlock"></a>

#### block.nextBlock : <code>Block</code> \| <code>null</code>
<p>Getter for next block.</p>

**Kind**: instance property of [<code>Block</code>](#module_block..Block)  
**Read only**: true  
<a name="module_block..Block+nextBlock"></a>

#### block.nextBlock
<p>Setter for next block.</p>

**Kind**: instance property of [<code>Block</code>](#module_block..Block)  
<a name="module_block..Block+previousBlock"></a>

#### block.previousBlock : <code>Block</code> \| <code>null</code>
<p>Getter for previous block.</p>

**Kind**: instance property of [<code>Block</code>](#module_block..Block)  
**Read only**: true  
<a name="module_block..Block+previousBlock"></a>

#### block.previousBlock
<p>Setter for previous block.</p>

**Kind**: instance property of [<code>Block</code>](#module_block..Block)  
<a name="module_block..Block+parentBlock"></a>

#### block.parentBlock : <code>Block</code>
<p>Getter for parent block.</p>

**Kind**: instance property of [<code>Block</code>](#module_block..Block)  
**Read only**: true  
<a name="module_block..Block+parentBlock"></a>

#### block.parentBlock
<p>Setter for parent block.</p>

**Kind**: instance property of [<code>Block</code>](#module_block..Block)  
<a name="module_block..Block+sprite"></a>

#### block.sprite : <code>Sprite</code>
<p>Getter for sprite</p>

**Kind**: instance property of [<code>Block</code>](#module_block..Block)  
<a name="module_block..Block+sprite"></a>

#### block.sprite
<p>Setter for sprite</p>

**Kind**: instance property of [<code>Block</code>](#module_block..Block)  
<a name="module_block..Block+asShadow"></a>

#### block.asShadow() ⇒ <code>this</code>
<p>Makes the block into a shadow.</p>

**Kind**: instance method of [<code>Block</code>](#module_block..Block)  
<a name="module_block..Block+withNextBlock"></a>

#### block.withNextBlock(block) ⇒ <code>Block</code>
<p>Adds a block as a child of this block (returns the added block).</p>

**Kind**: instance method of [<code>Block</code>](#module_block..Block)  

| Param | Type |
| --- | --- |
| block | <code>Block</code> | 

<a name="module_block..Block"></a>

### block~Block : <code>Block</code>
<p>Represents a scratch block.</p>

**Kind**: inner typedef of [<code>block</code>](#module_block)  

* [~Block](#module_block..Block) : <code>Block</code>
    * [new Block(opcode, inputs, fields)](#new_module_block..Block_new)
    * [.nextBlock](#module_block..Block+nextBlock) : <code>Block</code> \| <code>null</code>
    * [.nextBlock](#module_block..Block+nextBlock)
    * [.previousBlock](#module_block..Block+previousBlock) : <code>Block</code> \| <code>null</code>
    * [.previousBlock](#module_block..Block+previousBlock)
    * [.parentBlock](#module_block..Block+parentBlock) : <code>Block</code>
    * [.parentBlock](#module_block..Block+parentBlock)
    * [.sprite](#module_block..Block+sprite) : <code>Sprite</code>
    * [.sprite](#module_block..Block+sprite)
    * [.asShadow()](#module_block..Block+asShadow) ⇒ <code>this</code>
    * [.withNextBlock(block)](#module_block..Block+withNextBlock) ⇒ <code>Block</code>

<a name="new_module_block..Block_new"></a>

#### new Block(opcode, inputs, fields)
<p>Creates an instance of Block.</p>


| Param | Type |
| --- | --- |
| opcode | <code>string</code> | 
| inputs | <code>Array.&lt;(string\|Variable\|Block\|null)&gt;</code> | 
| fields | <code>Array.&lt;(string\|Broadcast)&gt;</code> | 

<a name="module_block..Block+nextBlock"></a>

#### block.nextBlock : <code>Block</code> \| <code>null</code>
<p>Getter for next block.</p>

**Kind**: instance property of [<code>Block</code>](#module_block..Block)  
**Read only**: true  
<a name="module_block..Block+nextBlock"></a>

#### block.nextBlock
<p>Setter for next block.</p>

**Kind**: instance property of [<code>Block</code>](#module_block..Block)  
<a name="module_block..Block+previousBlock"></a>

#### block.previousBlock : <code>Block</code> \| <code>null</code>
<p>Getter for previous block.</p>

**Kind**: instance property of [<code>Block</code>](#module_block..Block)  
**Read only**: true  
<a name="module_block..Block+previousBlock"></a>

#### block.previousBlock
<p>Setter for previous block.</p>

**Kind**: instance property of [<code>Block</code>](#module_block..Block)  
<a name="module_block..Block+parentBlock"></a>

#### block.parentBlock : <code>Block</code>
<p>Getter for parent block.</p>

**Kind**: instance property of [<code>Block</code>](#module_block..Block)  
**Read only**: true  
<a name="module_block..Block+parentBlock"></a>

#### block.parentBlock
<p>Setter for parent block.</p>

**Kind**: instance property of [<code>Block</code>](#module_block..Block)  
<a name="module_block..Block+sprite"></a>

#### block.sprite : <code>Sprite</code>
<p>Getter for sprite</p>

**Kind**: instance property of [<code>Block</code>](#module_block..Block)  
<a name="module_block..Block+sprite"></a>

#### block.sprite
<p>Setter for sprite</p>

**Kind**: instance property of [<code>Block</code>](#module_block..Block)  
<a name="module_block..Block+asShadow"></a>

#### block.asShadow() ⇒ <code>this</code>
<p>Makes the block into a shadow.</p>

**Kind**: instance method of [<code>Block</code>](#module_block..Block)  
<a name="module_block..Block+withNextBlock"></a>

#### block.withNextBlock(block) ⇒ <code>Block</code>
<p>Adds a block as a child of this block (returns the added block).</p>

**Kind**: instance method of [<code>Block</code>](#module_block..Block)  

| Param | Type |
| --- | --- |
| block | <code>Block</code> | 

<a name="module_blockComment"></a>

## blockComment
<a name="module_blockComment..BlockComment"></a>

### blockComment~BlockComment : <code>BlockComment</code>
<p>Represents a comment.</p>

**Kind**: inner typedef of [<code>blockComment</code>](#module_blockComment)  
<a name="module_broadcast"></a>

## broadcast

* [broadcast](#module_broadcast)
    * [~Broadcast](#module_broadcast..Broadcast)
        * [new Broadcast(name)](#new_module_broadcast..Broadcast_new)
    * [~Broadcast](#module_broadcast..Broadcast) : <code>Broadcast</code>
        * [new Broadcast(name)](#new_module_broadcast..Broadcast_new)

<a name="module_broadcast..Broadcast"></a>

### broadcast~Broadcast
**Kind**: inner class of [<code>broadcast</code>](#module_broadcast)  
<a name="new_module_broadcast..Broadcast_new"></a>

#### new Broadcast(name)
<p>Creates an instance of Broadcast.</p>


| Param | Type |
| --- | --- |
| name | <code>string</code> | 

<a name="module_broadcast..Broadcast"></a>

### broadcast~Broadcast : <code>Broadcast</code>
<p>Represents a broadcast.</p>

**Kind**: inner typedef of [<code>broadcast</code>](#module_broadcast)  
<a name="new_module_broadcast..Broadcast_new"></a>

#### new Broadcast(name)
<p>Creates an instance of Broadcast.</p>


| Param | Type |
| --- | --- |
| name | <code>string</code> | 

<a name="module_costume"></a>

## costume

* [costume](#module_costume)
    * [~Costume](#module_costume..Costume)
        * [new Costume(path)](#new_module_costume..Costume_new)
    * [~Costume](#module_costume..Costume) : <code>Costume</code>
        * [new Costume(path)](#new_module_costume..Costume_new)

<a name="module_costume..Costume"></a>

### costume~Costume
**Kind**: inner class of [<code>costume</code>](#module_costume)  
<a name="new_module_costume..Costume_new"></a>

#### new Costume(path)
<p>Creates an instance of Costume.</p>


| Param | Type |
| --- | --- |
| path | <code>string</code> | 

<a name="module_costume..Costume"></a>

### costume~Costume : <code>Costume</code>
<p>Represents a sprite's costume.</p>

**Kind**: inner typedef of [<code>costume</code>](#module_costume)  
<a name="new_module_costume..Costume_new"></a>

#### new Costume(path)
<p>Creates an instance of Costume.</p>


| Param | Type |
| --- | --- |
| path | <code>string</code> | 

<a name="module_list"></a>

## list

* [list](#module_list)
    * [~List](#module_list..List)
        * [new List(name)](#new_module_list..List_new)
        * [.withValue(value)](#module_list..List+withValue) ⇒ <code>this</code>
        * [.withValues(values)](#module_list..List+withValues) ⇒ <code>this</code>
    * [~List](#module_list..List) : <code>List</code>
        * [new List(name)](#new_module_list..List_new)
        * [.withValue(value)](#module_list..List+withValue) ⇒ <code>this</code>
        * [.withValues(values)](#module_list..List+withValues) ⇒ <code>this</code>

<a name="module_list..List"></a>

### list~List
**Kind**: inner class of [<code>list</code>](#module_list)  

* [~List](#module_list..List)
    * [new List(name)](#new_module_list..List_new)
    * [.withValue(value)](#module_list..List+withValue) ⇒ <code>this</code>
    * [.withValues(values)](#module_list..List+withValues) ⇒ <code>this</code>

<a name="new_module_list..List_new"></a>

#### new List(name)
<p>Creates an instance of List.</p>


| Param | Type |
| --- | --- |
| name | <code>string</code> | 

<a name="module_list..List+withValue"></a>

#### list.withValue(value) ⇒ <code>this</code>
<p>Adds a value to the list.</p>

**Kind**: instance method of [<code>List</code>](#module_list..List)  

| Param | Type |
| --- | --- |
| value | <code>number</code> \| <code>string</code> \| <code>boolean</code> | 

<a name="module_list..List+withValues"></a>

#### list.withValues(values) ⇒ <code>this</code>
<p>Adds multiple values to a list.</p>

**Kind**: instance method of [<code>List</code>](#module_list..List)  

| Param | Type |
| --- | --- |
| values | <code>Array.&lt;(number\|string\|boolean)&gt;</code> | 

<a name="module_list..List"></a>

### list~List : <code>List</code>
<p>Represents a scratch list.</p>

**Kind**: inner typedef of [<code>list</code>](#module_list)  

* [~List](#module_list..List) : <code>List</code>
    * [new List(name)](#new_module_list..List_new)
    * [.withValue(value)](#module_list..List+withValue) ⇒ <code>this</code>
    * [.withValues(values)](#module_list..List+withValues) ⇒ <code>this</code>

<a name="new_module_list..List_new"></a>

#### new List(name)
<p>Creates an instance of List.</p>


| Param | Type |
| --- | --- |
| name | <code>string</code> | 

<a name="module_list..List+withValue"></a>

#### list.withValue(value) ⇒ <code>this</code>
<p>Adds a value to the list.</p>

**Kind**: instance method of [<code>List</code>](#module_list..List)  

| Param | Type |
| --- | --- |
| value | <code>number</code> \| <code>string</code> \| <code>boolean</code> | 

<a name="module_list..List+withValues"></a>

#### list.withValues(values) ⇒ <code>this</code>
<p>Adds multiple values to a list.</p>

**Kind**: instance method of [<code>List</code>](#module_list..List)  

| Param | Type |
| --- | --- |
| values | <code>Array.&lt;(number\|string\|boolean)&gt;</code> | 

<a name="module_metadata"></a>

## metadata

* [metadata](#module_metadata)
    * [~Metadata](#module_metadata..Metadata)
        * [new Metadata(semver, vm, agent)](#new_module_metadata..Metadata_new)
    * [~Metadata](#module_metadata..Metadata) : <code>Metadata</code>
        * [new Metadata(semver, vm, agent)](#new_module_metadata..Metadata_new)

<a name="module_metadata..Metadata"></a>

### metadata~Metadata
**Kind**: inner class of [<code>metadata</code>](#module_metadata)  
<a name="new_module_metadata..Metadata_new"></a>

#### new Metadata(semver, vm, agent)
<p>Creates an instance of Metadata.</p>


| Param | Type |
| --- | --- |
| semver | <code>string</code> | 
| vm | <code>string</code> | 
| agent | <code>string</code> | 

<a name="module_metadata..Metadata"></a>

### metadata~Metadata : <code>Metadata</code>
<p>Represents a .sb3 project's metadata.</p>

**Kind**: inner typedef of [<code>metadata</code>](#module_metadata)  
<a name="new_module_metadata..Metadata_new"></a>

#### new Metadata(semver, vm, agent)
<p>Creates an instance of Metadata.</p>


| Param | Type |
| --- | --- |
| semver | <code>string</code> | 
| vm | <code>string</code> | 
| agent | <code>string</code> | 

<a name="module_project"></a>

## project

* [project](#module_project)
    * [~Project](#module_project..Project)
        * [new Project(name)](#new_module_project..Project_new)
        * [.withSprite(sprite)](#module_project..Project+withSprite) ⇒ <code>this</code>
        * [.build()](#module_project..Project+build)
        * [.getOutputDirectoryPath()](#module_project..Project+getOutputDirectoryPath) ⇒ <code>string</code>
        * [.getDebugDirectoryPath()](#module_project..Project+getDebugDirectoryPath) ⇒ <code>string</code>
        * [.getOutputFilePath()](#module_project..Project+getOutputFilePath) ⇒ <code>string</code>
        * [.getDebugJsonFilePath()](#module_project..Project+getDebugJsonFilePath) ⇒ <code>string</code>
    * [~Project](#module_project..Project) : <code>Project</code>
        * [new Project(name)](#new_module_project..Project_new)
        * [.withSprite(sprite)](#module_project..Project+withSprite) ⇒ <code>this</code>
        * [.build()](#module_project..Project+build)
        * [.getOutputDirectoryPath()](#module_project..Project+getOutputDirectoryPath) ⇒ <code>string</code>
        * [.getDebugDirectoryPath()](#module_project..Project+getDebugDirectoryPath) ⇒ <code>string</code>
        * [.getOutputFilePath()](#module_project..Project+getOutputFilePath) ⇒ <code>string</code>
        * [.getDebugJsonFilePath()](#module_project..Project+getDebugJsonFilePath) ⇒ <code>string</code>

<a name="module_project..Project"></a>

### project~Project
**Kind**: inner class of [<code>project</code>](#module_project)  

* [~Project](#module_project..Project)
    * [new Project(name)](#new_module_project..Project_new)
    * [.withSprite(sprite)](#module_project..Project+withSprite) ⇒ <code>this</code>
    * [.build()](#module_project..Project+build)
    * [.getOutputDirectoryPath()](#module_project..Project+getOutputDirectoryPath) ⇒ <code>string</code>
    * [.getDebugDirectoryPath()](#module_project..Project+getDebugDirectoryPath) ⇒ <code>string</code>
    * [.getOutputFilePath()](#module_project..Project+getOutputFilePath) ⇒ <code>string</code>
    * [.getDebugJsonFilePath()](#module_project..Project+getDebugJsonFilePath) ⇒ <code>string</code>

<a name="new_module_project..Project_new"></a>

#### new Project(name)
<p>Creates an instance of Project.</p>


| Param | Type |
| --- | --- |
| name | <code>string</code> | 

<a name="module_project..Project+withSprite"></a>

#### project.withSprite(sprite) ⇒ <code>this</code>
<p>Adds a sprite to the project.</p>

**Kind**: instance method of [<code>Project</code>](#module_project..Project)  

| Param | Type |
| --- | --- |
| sprite | <code>Sprite</code> | 

<a name="module_project..Project+build"></a>

#### project.build()
<p>Builds the project into a zip file.</p>

**Kind**: instance method of [<code>Project</code>](#module_project..Project)  
<a name="module_project..Project+getOutputDirectoryPath"></a>

#### project.getOutputDirectoryPath() ⇒ <code>string</code>
<p>Produces the path to the output directory.</p>

**Kind**: instance method of [<code>Project</code>](#module_project..Project)  
<a name="module_project..Project+getDebugDirectoryPath"></a>

#### project.getDebugDirectoryPath() ⇒ <code>string</code>
<p>Produces the path to the output/debug directory.</p>

**Kind**: instance method of [<code>Project</code>](#module_project..Project)  
<a name="module_project..Project+getOutputFilePath"></a>

#### project.getOutputFilePath() ⇒ <code>string</code>
<p>Produces the path the the output file.</p>

**Kind**: instance method of [<code>Project</code>](#module_project..Project)  
<a name="module_project..Project+getDebugJsonFilePath"></a>

#### project.getDebugJsonFilePath() ⇒ <code>string</code>
<p>Produces the path the the debug project.json file.</p>

**Kind**: instance method of [<code>Project</code>](#module_project..Project)  
<a name="module_project..Project"></a>

### project~Project : <code>Project</code>
<p>Represents a .sb3 project.</p>

**Kind**: inner typedef of [<code>project</code>](#module_project)  

* [~Project](#module_project..Project) : <code>Project</code>
    * [new Project(name)](#new_module_project..Project_new)
    * [.withSprite(sprite)](#module_project..Project+withSprite) ⇒ <code>this</code>
    * [.build()](#module_project..Project+build)
    * [.getOutputDirectoryPath()](#module_project..Project+getOutputDirectoryPath) ⇒ <code>string</code>
    * [.getDebugDirectoryPath()](#module_project..Project+getDebugDirectoryPath) ⇒ <code>string</code>
    * [.getOutputFilePath()](#module_project..Project+getOutputFilePath) ⇒ <code>string</code>
    * [.getDebugJsonFilePath()](#module_project..Project+getDebugJsonFilePath) ⇒ <code>string</code>

<a name="new_module_project..Project_new"></a>

#### new Project(name)
<p>Creates an instance of Project.</p>


| Param | Type |
| --- | --- |
| name | <code>string</code> | 

<a name="module_project..Project+withSprite"></a>

#### project.withSprite(sprite) ⇒ <code>this</code>
<p>Adds a sprite to the project.</p>

**Kind**: instance method of [<code>Project</code>](#module_project..Project)  

| Param | Type |
| --- | --- |
| sprite | <code>Sprite</code> | 

<a name="module_project..Project+build"></a>

#### project.build()
<p>Builds the project into a zip file.</p>

**Kind**: instance method of [<code>Project</code>](#module_project..Project)  
<a name="module_project..Project+getOutputDirectoryPath"></a>

#### project.getOutputDirectoryPath() ⇒ <code>string</code>
<p>Produces the path to the output directory.</p>

**Kind**: instance method of [<code>Project</code>](#module_project..Project)  
<a name="module_project..Project+getDebugDirectoryPath"></a>

#### project.getDebugDirectoryPath() ⇒ <code>string</code>
<p>Produces the path to the output/debug directory.</p>

**Kind**: instance method of [<code>Project</code>](#module_project..Project)  
<a name="module_project..Project+getOutputFilePath"></a>

#### project.getOutputFilePath() ⇒ <code>string</code>
<p>Produces the path the the output file.</p>

**Kind**: instance method of [<code>Project</code>](#module_project..Project)  
<a name="module_project..Project+getDebugJsonFilePath"></a>

#### project.getDebugJsonFilePath() ⇒ <code>string</code>
<p>Produces the path the the debug project.json file.</p>

**Kind**: instance method of [<code>Project</code>](#module_project..Project)  
<a name="module_sb3Generator"></a>

## sb3Generator

* [sb3Generator](#module_sb3Generator)
    * [~uidCharacters](#module_sb3Generator..uidCharacters) : <code>&quot;!#$%()\*+,-./:;&#x3D;?@[]^\_&#x60;{\|}~ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789&quot;&quot;</code>
    * [~createProject(name)](#module_sb3Generator..createProject) ⇒ <code>Project</code>
    * [~createSprite(name)](#module_sb3Generator..createSprite) ⇒ <code>Sprite</code>
    * [~createVariable(name)](#module_sb3Generator..createVariable) ⇒ <code>Variable</code>
    * [~createList(name)](#module_sb3Generator..createList) ⇒ <code>List</code>
    * [~createBroadcast(name)](#module_sb3Generator..createBroadcast) ⇒ <code>Broadcast</code>
    * [~createCostume(path)](#module_sb3Generator..createCostume) ⇒ <code>Costume</code>
    * [~createSound(path)](#module_sb3Generator..createSound) ⇒ <code>\*</code>
    * [~createBlock(opcode, inputs, fields)](#module_sb3Generator..createBlock) ⇒ <code>Block</code>
    * [~generateUid([length])](#module_sb3Generator..generateUid) ⇒ <code>string</code>

<a name="module_sb3Generator..uidCharacters"></a>

### sb3Generator~uidCharacters : <code>&quot;!#$%()\*+,-./:;&#x3D;?@[]^\_&#x60;{\|}~ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789&quot;&quot;</code>
<p>The characters used to generate uids.</p>

**Kind**: inner constant of [<code>sb3Generator</code>](#module_sb3Generator)  
<a name="module_sb3Generator..createProject"></a>

### sb3Generator~createProject(name) ⇒ <code>Project</code>
<p>Creates a project.</p>

**Kind**: inner method of [<code>sb3Generator</code>](#module_sb3Generator)  

| Param | Type |
| --- | --- |
| name | <code>string</code> | 

<a name="module_sb3Generator..createSprite"></a>

### sb3Generator~createSprite(name) ⇒ <code>Sprite</code>
<p>Creates a sprite.</p>

**Kind**: inner method of [<code>sb3Generator</code>](#module_sb3Generator)  

| Param | Type |
| --- | --- |
| name | <code>string</code> | 

<a name="module_sb3Generator..createVariable"></a>

### sb3Generator~createVariable(name) ⇒ <code>Variable</code>
<p>Creates a variable.</p>

**Kind**: inner method of [<code>sb3Generator</code>](#module_sb3Generator)  

| Param | Type |
| --- | --- |
| name | <code>string</code> | 

<a name="module_sb3Generator..createList"></a>

### sb3Generator~createList(name) ⇒ <code>List</code>
<p>Creates a list.</p>

**Kind**: inner method of [<code>sb3Generator</code>](#module_sb3Generator)  

| Param | Type |
| --- | --- |
| name | <code>string</code> | 

<a name="module_sb3Generator..createBroadcast"></a>

### sb3Generator~createBroadcast(name) ⇒ <code>Broadcast</code>
<p>Creates a broadcast.</p>

**Kind**: inner method of [<code>sb3Generator</code>](#module_sb3Generator)  

| Param | Type |
| --- | --- |
| name | <code>string</code> | 

<a name="module_sb3Generator..createCostume"></a>

### sb3Generator~createCostume(path) ⇒ <code>Costume</code>
<p>Creates a costume.</p>

**Kind**: inner method of [<code>sb3Generator</code>](#module_sb3Generator)  

| Param | Type |
| --- | --- |
| path | <code>string</code> | 

<a name="module_sb3Generator..createSound"></a>

### sb3Generator~createSound(path) ⇒ <code>\*</code>
<p>Creates a sound.</p>

**Kind**: inner method of [<code>sb3Generator</code>](#module_sb3Generator)  

| Param | Type |
| --- | --- |
| path | <code>string</code> | 

<a name="module_sb3Generator..createBlock"></a>

### sb3Generator~createBlock(opcode, inputs, fields) ⇒ <code>Block</code>
<p>Creates a block.</p>

**Kind**: inner method of [<code>sb3Generator</code>](#module_sb3Generator)  

| Param | Type |
| --- | --- |
| opcode | <code>string</code> | 
| inputs | <code>Array.&lt;(string\|Variable\|Block\|null)&gt;</code> | 
| fields | <code>Array.&lt;(string\|Broadcast)&gt;</code> | 

<a name="module_sb3Generator..generateUid"></a>

### sb3Generator~generateUid([length]) ⇒ <code>string</code>
<p>Generates a uid.</p>

**Kind**: inner method of [<code>sb3Generator</code>](#module_sb3Generator)  

| Param | Type | Default |
| --- | --- | --- |
| [length] | <code>number</code> | <code>20</code> | 

<a name="module_sound"></a>

## sound

* [sound](#module_sound)
    * [~Sound](#module_sound..Sound)
        * [new Sound(path)](#new_module_sound..Sound_new)
    * [~Sound](#module_sound..Sound) : <code>Sound</code>
        * [new Sound(path)](#new_module_sound..Sound_new)

<a name="module_sound..Sound"></a>

### sound~Sound
**Kind**: inner class of [<code>sound</code>](#module_sound)  
<a name="new_module_sound..Sound_new"></a>

#### new Sound(path)
<p>Creates an instance of Sound.</p>


| Param | Type |
| --- | --- |
| path | <code>string</code> | 

<a name="module_sound..Sound"></a>

### sound~Sound : <code>Sound</code>
<p>Represents a scratch sound.</p>

**Kind**: inner typedef of [<code>sound</code>](#module_sound)  
<a name="new_module_sound..Sound_new"></a>

#### new Sound(path)
<p>Creates an instance of Sound.</p>


| Param | Type |
| --- | --- |
| path | <code>string</code> | 

<a name="module_sprite"></a>

## sprite

* [sprite](#module_sprite)
    * [~Sprite](#module_sprite..Sprite)
        * [new Sprite(name)](#new_module_sprite..Sprite_new)
        * [.build(zip)](#module_sprite..Sprite+build)
        * [.asStage()](#module_sprite..Sprite+asStage) ⇒ <code>this</code>
        * [.withVariable(variable)](#module_sprite..Sprite+withVariable) ⇒ <code>this</code>
        * [.withList(list)](#module_sprite..Sprite+withList) ⇒ <code>this</code>
        * [.withBroadcast(broadcast)](#module_sprite..Sprite+withBroadcast) ⇒ <code>this</code>
        * [.withBlock(block)](#module_sprite..Sprite+withBlock) ⇒ <code>this</code>
        * [.withDefaultCostume(defaultCostumeNumber)](#module_sprite..Sprite+withDefaultCostume) ⇒ <code>this</code>
        * [.withCostume(costume)](#module_sprite..Sprite+withCostume) ⇒ <code>this</code>
        * [.withSound(sound)](#module_sprite..Sprite+withSound) ⇒ <code>this</code>
        * [.withVolume(volume)](#module_sprite..Sprite+withVolume) ⇒ <code>this</code>
        * [.withLayerOrder(layerOrder)](#module_sprite..Sprite+withLayerOrder) ⇒ <code>this</code>
        * [.withTempo(tempo)](#module_sprite..Sprite+withTempo) ⇒ <code>this</code>
        * [.withVideoTransparency(videoTransparency)](#module_sprite..Sprite+withVideoTransparency) ⇒ <code>this</code>
        * [.withVideoState(videoState)](#module_sprite..Sprite+withVideoState) ⇒ <code>this</code>
        * [.withTextToSpeechLanguage(textToSpeechLanguage)](#module_sprite..Sprite+withTextToSpeechLanguage) ⇒ <code>this</code>
        * [.withPosition(x, y)](#module_sprite..Sprite+withPosition)
        * [.withSize(size)](#module_sprite..Sprite+withSize)
        * [.withAngle(angle)](#module_sprite..Sprite+withAngle)
        * [.asDraggable()](#module_sprite..Sprite+asDraggable)
        * [.withRotationStyle(rotationStyle)](#module_sprite..Sprite+withRotationStyle)
        * [.asInvisibleSprite()](#module_sprite..Sprite+asInvisibleSprite)
    * [~Sprite](#module_sprite..Sprite) : <code>Sprite</code>
        * [new Sprite(name)](#new_module_sprite..Sprite_new)
        * [.build(zip)](#module_sprite..Sprite+build)
        * [.asStage()](#module_sprite..Sprite+asStage) ⇒ <code>this</code>
        * [.withVariable(variable)](#module_sprite..Sprite+withVariable) ⇒ <code>this</code>
        * [.withList(list)](#module_sprite..Sprite+withList) ⇒ <code>this</code>
        * [.withBroadcast(broadcast)](#module_sprite..Sprite+withBroadcast) ⇒ <code>this</code>
        * [.withBlock(block)](#module_sprite..Sprite+withBlock) ⇒ <code>this</code>
        * [.withDefaultCostume(defaultCostumeNumber)](#module_sprite..Sprite+withDefaultCostume) ⇒ <code>this</code>
        * [.withCostume(costume)](#module_sprite..Sprite+withCostume) ⇒ <code>this</code>
        * [.withSound(sound)](#module_sprite..Sprite+withSound) ⇒ <code>this</code>
        * [.withVolume(volume)](#module_sprite..Sprite+withVolume) ⇒ <code>this</code>
        * [.withLayerOrder(layerOrder)](#module_sprite..Sprite+withLayerOrder) ⇒ <code>this</code>
        * [.withTempo(tempo)](#module_sprite..Sprite+withTempo) ⇒ <code>this</code>
        * [.withVideoTransparency(videoTransparency)](#module_sprite..Sprite+withVideoTransparency) ⇒ <code>this</code>
        * [.withVideoState(videoState)](#module_sprite..Sprite+withVideoState) ⇒ <code>this</code>
        * [.withTextToSpeechLanguage(textToSpeechLanguage)](#module_sprite..Sprite+withTextToSpeechLanguage) ⇒ <code>this</code>
        * [.withPosition(x, y)](#module_sprite..Sprite+withPosition)
        * [.withSize(size)](#module_sprite..Sprite+withSize)
        * [.withAngle(angle)](#module_sprite..Sprite+withAngle)
        * [.asDraggable()](#module_sprite..Sprite+asDraggable)
        * [.withRotationStyle(rotationStyle)](#module_sprite..Sprite+withRotationStyle)
        * [.asInvisibleSprite()](#module_sprite..Sprite+asInvisibleSprite)

<a name="module_sprite..Sprite"></a>

### sprite~Sprite
**Kind**: inner class of [<code>sprite</code>](#module_sprite)  

* [~Sprite](#module_sprite..Sprite)
    * [new Sprite(name)](#new_module_sprite..Sprite_new)
    * [.build(zip)](#module_sprite..Sprite+build)
    * [.asStage()](#module_sprite..Sprite+asStage) ⇒ <code>this</code>
    * [.withVariable(variable)](#module_sprite..Sprite+withVariable) ⇒ <code>this</code>
    * [.withList(list)](#module_sprite..Sprite+withList) ⇒ <code>this</code>
    * [.withBroadcast(broadcast)](#module_sprite..Sprite+withBroadcast) ⇒ <code>this</code>
    * [.withBlock(block)](#module_sprite..Sprite+withBlock) ⇒ <code>this</code>
    * [.withDefaultCostume(defaultCostumeNumber)](#module_sprite..Sprite+withDefaultCostume) ⇒ <code>this</code>
    * [.withCostume(costume)](#module_sprite..Sprite+withCostume) ⇒ <code>this</code>
    * [.withSound(sound)](#module_sprite..Sprite+withSound) ⇒ <code>this</code>
    * [.withVolume(volume)](#module_sprite..Sprite+withVolume) ⇒ <code>this</code>
    * [.withLayerOrder(layerOrder)](#module_sprite..Sprite+withLayerOrder) ⇒ <code>this</code>
    * [.withTempo(tempo)](#module_sprite..Sprite+withTempo) ⇒ <code>this</code>
    * [.withVideoTransparency(videoTransparency)](#module_sprite..Sprite+withVideoTransparency) ⇒ <code>this</code>
    * [.withVideoState(videoState)](#module_sprite..Sprite+withVideoState) ⇒ <code>this</code>
    * [.withTextToSpeechLanguage(textToSpeechLanguage)](#module_sprite..Sprite+withTextToSpeechLanguage) ⇒ <code>this</code>
    * [.withPosition(x, y)](#module_sprite..Sprite+withPosition)
    * [.withSize(size)](#module_sprite..Sprite+withSize)
    * [.withAngle(angle)](#module_sprite..Sprite+withAngle)
    * [.asDraggable()](#module_sprite..Sprite+asDraggable)
    * [.withRotationStyle(rotationStyle)](#module_sprite..Sprite+withRotationStyle)
    * [.asInvisibleSprite()](#module_sprite..Sprite+asInvisibleSprite)

<a name="new_module_sprite..Sprite_new"></a>

#### new Sprite(name)
<p>Creates an instance of Sprite.</p>


| Param | Type |
| --- | --- |
| name | <code>string</code> | 

<a name="module_sprite..Sprite+build"></a>

#### sprite.build(zip)
<p>Builds the sprite.</p>

**Kind**: instance method of [<code>Sprite</code>](#module_sprite..Sprite)  

| Param | Type |
| --- | --- |
| zip | <code>JSZip</code> | 

<a name="module_sprite..Sprite+asStage"></a>

#### sprite.asStage() ⇒ <code>this</code>
<p>Transforms the sprite into a stage.</p>

**Kind**: instance method of [<code>Sprite</code>](#module_sprite..Sprite)  
<a name="module_sprite..Sprite+withVariable"></a>

#### sprite.withVariable(variable) ⇒ <code>this</code>
<p>Adds a scratch variable to the sprite.</p>

**Kind**: instance method of [<code>Sprite</code>](#module_sprite..Sprite)  

| Param | Type |
| --- | --- |
| variable | <code>Variable</code> | 

<a name="module_sprite..Sprite+withList"></a>

#### sprite.withList(list) ⇒ <code>this</code>
<p>Adds a scratch list to the sprite.</p>

**Kind**: instance method of [<code>Sprite</code>](#module_sprite..Sprite)  

| Param | Type |
| --- | --- |
| list | <code>List</code> | 

<a name="module_sprite..Sprite+withBroadcast"></a>

#### sprite.withBroadcast(broadcast) ⇒ <code>this</code>
<p>Adds a broadcast to the sprite.</p>

**Kind**: instance method of [<code>Sprite</code>](#module_sprite..Sprite)  

| Param | Type |
| --- | --- |
| broadcast | <code>Broadcast</code> | 

<a name="module_sprite..Sprite+withBlock"></a>

#### sprite.withBlock(block) ⇒ <code>this</code>
<p>Adds a top levle block to the sprite.</p>

**Kind**: instance method of [<code>Sprite</code>](#module_sprite..Sprite)  

| Param | Type |
| --- | --- |
| block | <code>Block</code> | 

<a name="module_sprite..Sprite+withDefaultCostume"></a>

#### sprite.withDefaultCostume(defaultCostumeNumber) ⇒ <code>this</code>
<p>Sets the current costume.</p>

**Kind**: instance method of [<code>Sprite</code>](#module_sprite..Sprite)  

| Param | Type |
| --- | --- |
| defaultCostumeNumber | <code>number</code> | 

<a name="module_sprite..Sprite+withCostume"></a>

#### sprite.withCostume(costume) ⇒ <code>this</code>
<p>Adds a costume to the sprite.</p>

**Kind**: instance method of [<code>Sprite</code>](#module_sprite..Sprite)  

| Param | Type |
| --- | --- |
| costume | <code>Costume</code> | 

<a name="module_sprite..Sprite+withSound"></a>

#### sprite.withSound(sound) ⇒ <code>this</code>
<p>Adds a sound to the sprite.</p>

**Kind**: instance method of [<code>Sprite</code>](#module_sprite..Sprite)  

| Param | Type |
| --- | --- |
| sound | <code>Sound</code> | 

<a name="module_sprite..Sprite+withVolume"></a>

#### sprite.withVolume(volume) ⇒ <code>this</code>
<p>Sets the sprite's volume.</p>

**Kind**: instance method of [<code>Sprite</code>](#module_sprite..Sprite)  

| Param | Type |
| --- | --- |
| volume | <code>number</code> | 

<a name="module_sprite..Sprite+withLayerOrder"></a>

#### sprite.withLayerOrder(layerOrder) ⇒ <code>this</code>
<p>Sets the sprite's sorting order.</p>

**Kind**: instance method of [<code>Sprite</code>](#module_sprite..Sprite)  

| Param | Type |
| --- | --- |
| layerOrder | <code>number</code> | 

<a name="module_sprite..Sprite+withTempo"></a>

#### sprite.withTempo(tempo) ⇒ <code>this</code>
<p>Sets the sprite's tempo.</p>

**Kind**: instance method of [<code>Sprite</code>](#module_sprite..Sprite)  

| Param | Type |
| --- | --- |
| tempo | <code>number</code> | 

<a name="module_sprite..Sprite+withVideoTransparency"></a>

#### sprite.withVideoTransparency(videoTransparency) ⇒ <code>this</code>
<p>Sets the sprite's video transparency.</p>

**Kind**: instance method of [<code>Sprite</code>](#module_sprite..Sprite)  

| Param | Type |
| --- | --- |
| videoTransparency | <code>number</code> | 

<a name="module_sprite..Sprite+withVideoState"></a>

#### sprite.withVideoState(videoState) ⇒ <code>this</code>
<p>Sets the sprite's video state.</p>

**Kind**: instance method of [<code>Sprite</code>](#module_sprite..Sprite)  

| Param | Type |
| --- | --- |
| videoState | <code>string</code> | 

<a name="module_sprite..Sprite+withTextToSpeechLanguage"></a>

#### sprite.withTextToSpeechLanguage(textToSpeechLanguage) ⇒ <code>this</code>
<p>Sets the sprite's TTS language.</p>

**Kind**: instance method of [<code>Sprite</code>](#module_sprite..Sprite)  

| Param | Type |
| --- | --- |
| textToSpeechLanguage | <code>TextToSpeechLanguage</code> | 

<a name="module_sprite..Sprite+withPosition"></a>

#### sprite.withPosition(x, y)
<p>Sets the sprite's coordinates.</p>

**Kind**: instance method of [<code>Sprite</code>](#module_sprite..Sprite)  

| Param | Type |
| --- | --- |
| x | <code>number</code> | 
| y | <code>number</code> | 

<a name="module_sprite..Sprite+withSize"></a>

#### sprite.withSize(size)
<p>Sets the sprite's size in percent.</p>

**Kind**: instance method of [<code>Sprite</code>](#module_sprite..Sprite)  

| Param | Type |
| --- | --- |
| size | <code>number</code> | 

<a name="module_sprite..Sprite+withAngle"></a>

#### sprite.withAngle(angle)
<p>Sets the sprite's angle in degrees.</p>

**Kind**: instance method of [<code>Sprite</code>](#module_sprite..Sprite)  

| Param | Type |
| --- | --- |
| angle | <code>number</code> | 

<a name="module_sprite..Sprite+asDraggable"></a>

#### sprite.asDraggable()
<p>Sets whether the sprite is draggable.</p>

**Kind**: instance method of [<code>Sprite</code>](#module_sprite..Sprite)  
<a name="module_sprite..Sprite+withRotationStyle"></a>

#### sprite.withRotationStyle(rotationStyle)
<p>Sets the sprite's rotation style.</p>

**Kind**: instance method of [<code>Sprite</code>](#module_sprite..Sprite)  

| Param | Type |
| --- | --- |
| rotationStyle | <code>string</code> | 

<a name="module_sprite..Sprite+asInvisibleSprite"></a>

#### sprite.asInvisibleSprite()
<p>Sets the sprite to be invisible.</p>

**Kind**: instance method of [<code>Sprite</code>](#module_sprite..Sprite)  
<a name="module_sprite..Sprite"></a>

### sprite~Sprite : <code>Sprite</code>
<p>Represents a sprite.</p>

**Kind**: inner typedef of [<code>sprite</code>](#module_sprite)  

* [~Sprite](#module_sprite..Sprite) : <code>Sprite</code>
    * [new Sprite(name)](#new_module_sprite..Sprite_new)
    * [.build(zip)](#module_sprite..Sprite+build)
    * [.asStage()](#module_sprite..Sprite+asStage) ⇒ <code>this</code>
    * [.withVariable(variable)](#module_sprite..Sprite+withVariable) ⇒ <code>this</code>
    * [.withList(list)](#module_sprite..Sprite+withList) ⇒ <code>this</code>
    * [.withBroadcast(broadcast)](#module_sprite..Sprite+withBroadcast) ⇒ <code>this</code>
    * [.withBlock(block)](#module_sprite..Sprite+withBlock) ⇒ <code>this</code>
    * [.withDefaultCostume(defaultCostumeNumber)](#module_sprite..Sprite+withDefaultCostume) ⇒ <code>this</code>
    * [.withCostume(costume)](#module_sprite..Sprite+withCostume) ⇒ <code>this</code>
    * [.withSound(sound)](#module_sprite..Sprite+withSound) ⇒ <code>this</code>
    * [.withVolume(volume)](#module_sprite..Sprite+withVolume) ⇒ <code>this</code>
    * [.withLayerOrder(layerOrder)](#module_sprite..Sprite+withLayerOrder) ⇒ <code>this</code>
    * [.withTempo(tempo)](#module_sprite..Sprite+withTempo) ⇒ <code>this</code>
    * [.withVideoTransparency(videoTransparency)](#module_sprite..Sprite+withVideoTransparency) ⇒ <code>this</code>
    * [.withVideoState(videoState)](#module_sprite..Sprite+withVideoState) ⇒ <code>this</code>
    * [.withTextToSpeechLanguage(textToSpeechLanguage)](#module_sprite..Sprite+withTextToSpeechLanguage) ⇒ <code>this</code>
    * [.withPosition(x, y)](#module_sprite..Sprite+withPosition)
    * [.withSize(size)](#module_sprite..Sprite+withSize)
    * [.withAngle(angle)](#module_sprite..Sprite+withAngle)
    * [.asDraggable()](#module_sprite..Sprite+asDraggable)
    * [.withRotationStyle(rotationStyle)](#module_sprite..Sprite+withRotationStyle)
    * [.asInvisibleSprite()](#module_sprite..Sprite+asInvisibleSprite)

<a name="new_module_sprite..Sprite_new"></a>

#### new Sprite(name)
<p>Creates an instance of Sprite.</p>


| Param | Type |
| --- | --- |
| name | <code>string</code> | 

<a name="module_sprite..Sprite+build"></a>

#### sprite.build(zip)
<p>Builds the sprite.</p>

**Kind**: instance method of [<code>Sprite</code>](#module_sprite..Sprite)  

| Param | Type |
| --- | --- |
| zip | <code>JSZip</code> | 

<a name="module_sprite..Sprite+asStage"></a>

#### sprite.asStage() ⇒ <code>this</code>
<p>Transforms the sprite into a stage.</p>

**Kind**: instance method of [<code>Sprite</code>](#module_sprite..Sprite)  
<a name="module_sprite..Sprite+withVariable"></a>

#### sprite.withVariable(variable) ⇒ <code>this</code>
<p>Adds a scratch variable to the sprite.</p>

**Kind**: instance method of [<code>Sprite</code>](#module_sprite..Sprite)  

| Param | Type |
| --- | --- |
| variable | <code>Variable</code> | 

<a name="module_sprite..Sprite+withList"></a>

#### sprite.withList(list) ⇒ <code>this</code>
<p>Adds a scratch list to the sprite.</p>

**Kind**: instance method of [<code>Sprite</code>](#module_sprite..Sprite)  

| Param | Type |
| --- | --- |
| list | <code>List</code> | 

<a name="module_sprite..Sprite+withBroadcast"></a>

#### sprite.withBroadcast(broadcast) ⇒ <code>this</code>
<p>Adds a broadcast to the sprite.</p>

**Kind**: instance method of [<code>Sprite</code>](#module_sprite..Sprite)  

| Param | Type |
| --- | --- |
| broadcast | <code>Broadcast</code> | 

<a name="module_sprite..Sprite+withBlock"></a>

#### sprite.withBlock(block) ⇒ <code>this</code>
<p>Adds a top levle block to the sprite.</p>

**Kind**: instance method of [<code>Sprite</code>](#module_sprite..Sprite)  

| Param | Type |
| --- | --- |
| block | <code>Block</code> | 

<a name="module_sprite..Sprite+withDefaultCostume"></a>

#### sprite.withDefaultCostume(defaultCostumeNumber) ⇒ <code>this</code>
<p>Sets the current costume.</p>

**Kind**: instance method of [<code>Sprite</code>](#module_sprite..Sprite)  

| Param | Type |
| --- | --- |
| defaultCostumeNumber | <code>number</code> | 

<a name="module_sprite..Sprite+withCostume"></a>

#### sprite.withCostume(costume) ⇒ <code>this</code>
<p>Adds a costume to the sprite.</p>

**Kind**: instance method of [<code>Sprite</code>](#module_sprite..Sprite)  

| Param | Type |
| --- | --- |
| costume | <code>Costume</code> | 

<a name="module_sprite..Sprite+withSound"></a>

#### sprite.withSound(sound) ⇒ <code>this</code>
<p>Adds a sound to the sprite.</p>

**Kind**: instance method of [<code>Sprite</code>](#module_sprite..Sprite)  

| Param | Type |
| --- | --- |
| sound | <code>Sound</code> | 

<a name="module_sprite..Sprite+withVolume"></a>

#### sprite.withVolume(volume) ⇒ <code>this</code>
<p>Sets the sprite's volume.</p>

**Kind**: instance method of [<code>Sprite</code>](#module_sprite..Sprite)  

| Param | Type |
| --- | --- |
| volume | <code>number</code> | 

<a name="module_sprite..Sprite+withLayerOrder"></a>

#### sprite.withLayerOrder(layerOrder) ⇒ <code>this</code>
<p>Sets the sprite's sorting order.</p>

**Kind**: instance method of [<code>Sprite</code>](#module_sprite..Sprite)  

| Param | Type |
| --- | --- |
| layerOrder | <code>number</code> | 

<a name="module_sprite..Sprite+withTempo"></a>

#### sprite.withTempo(tempo) ⇒ <code>this</code>
<p>Sets the sprite's tempo.</p>

**Kind**: instance method of [<code>Sprite</code>](#module_sprite..Sprite)  

| Param | Type |
| --- | --- |
| tempo | <code>number</code> | 

<a name="module_sprite..Sprite+withVideoTransparency"></a>

#### sprite.withVideoTransparency(videoTransparency) ⇒ <code>this</code>
<p>Sets the sprite's video transparency.</p>

**Kind**: instance method of [<code>Sprite</code>](#module_sprite..Sprite)  

| Param | Type |
| --- | --- |
| videoTransparency | <code>number</code> | 

<a name="module_sprite..Sprite+withVideoState"></a>

#### sprite.withVideoState(videoState) ⇒ <code>this</code>
<p>Sets the sprite's video state.</p>

**Kind**: instance method of [<code>Sprite</code>](#module_sprite..Sprite)  

| Param | Type |
| --- | --- |
| videoState | <code>string</code> | 

<a name="module_sprite..Sprite+withTextToSpeechLanguage"></a>

#### sprite.withTextToSpeechLanguage(textToSpeechLanguage) ⇒ <code>this</code>
<p>Sets the sprite's TTS language.</p>

**Kind**: instance method of [<code>Sprite</code>](#module_sprite..Sprite)  

| Param | Type |
| --- | --- |
| textToSpeechLanguage | <code>TextToSpeechLanguage</code> | 

<a name="module_sprite..Sprite+withPosition"></a>

#### sprite.withPosition(x, y)
<p>Sets the sprite's coordinates.</p>

**Kind**: instance method of [<code>Sprite</code>](#module_sprite..Sprite)  

| Param | Type |
| --- | --- |
| x | <code>number</code> | 
| y | <code>number</code> | 

<a name="module_sprite..Sprite+withSize"></a>

#### sprite.withSize(size)
<p>Sets the sprite's size in percent.</p>

**Kind**: instance method of [<code>Sprite</code>](#module_sprite..Sprite)  

| Param | Type |
| --- | --- |
| size | <code>number</code> | 

<a name="module_sprite..Sprite+withAngle"></a>

#### sprite.withAngle(angle)
<p>Sets the sprite's angle in degrees.</p>

**Kind**: instance method of [<code>Sprite</code>](#module_sprite..Sprite)  

| Param | Type |
| --- | --- |
| angle | <code>number</code> | 

<a name="module_sprite..Sprite+asDraggable"></a>

#### sprite.asDraggable()
<p>Sets whether the sprite is draggable.</p>

**Kind**: instance method of [<code>Sprite</code>](#module_sprite..Sprite)  
<a name="module_sprite..Sprite+withRotationStyle"></a>

#### sprite.withRotationStyle(rotationStyle)
<p>Sets the sprite's rotation style.</p>

**Kind**: instance method of [<code>Sprite</code>](#module_sprite..Sprite)  

| Param | Type |
| --- | --- |
| rotationStyle | <code>string</code> | 

<a name="module_sprite..Sprite+asInvisibleSprite"></a>

#### sprite.asInvisibleSprite()
<p>Sets the sprite to be invisible.</p>

**Kind**: instance method of [<code>Sprite</code>](#module_sprite..Sprite)  
<a name="module_textToSpeech"></a>

## textToSpeech
<a name="module_textToSpeech..TextToSpeechLanguage"></a>

### textToSpeech~TextToSpeechLanguage : <code>TextToSpeechLanguage</code>
<p>Represents a TTS language.</p>

**Kind**: inner typedef of [<code>textToSpeech</code>](#module_textToSpeech)  
<a name="module_toBeImplemented"></a>

## toBeImplemented
<a name="module_toBeImplemented..ToBeImplemented"></a>

### toBeImplemented~ToBeImplemented : <code>ToBeImplemented</code>
<p>Represents a placeholder for a class that has not been implemented.</p>

**Kind**: inner typedef of [<code>toBeImplemented</code>](#module_toBeImplemented)  
<a name="module_utils"></a>

## utils

* [utils](#module_utils)
    * [~getFileExtensionFromPath(path)](#module_utils..getFileExtensionFromPath) ⇒ <code>string</code>
    * [~getFileNameFromPath(path)](#module_utils..getFileNameFromPath) ⇒ <code>string</code>

<a name="module_utils..getFileExtensionFromPath"></a>

### utils~getFileExtensionFromPath(path) ⇒ <code>string</code>
<p>Gets a file extension from a path.</p>

**Kind**: inner method of [<code>utils</code>](#module_utils)  

| Param | Type |
| --- | --- |
| path | <code>string</code> | 

<a name="module_utils..getFileNameFromPath"></a>

### utils~getFileNameFromPath(path) ⇒ <code>string</code>
<p>Gets a file name from a path.</p>

**Kind**: inner method of [<code>utils</code>](#module_utils)  

| Param | Type |
| --- | --- |
| path | <code>string</code> | 

<a name="module_variable"></a>

## variable

* [variable](#module_variable)
    * [~Variable](#module_variable..Variable)
        * [new Variable(name)](#new_module_variable..Variable_new)
        * [.withValue(value)](#module_variable..Variable+withValue) ⇒ <code>this</code>
    * [~Variable](#module_variable..Variable) : <code>Variable</code>
        * [new Variable(name)](#new_module_variable..Variable_new)
        * [.withValue(value)](#module_variable..Variable+withValue) ⇒ <code>this</code>

<a name="module_variable..Variable"></a>

### variable~Variable
**Kind**: inner class of [<code>variable</code>](#module_variable)  

* [~Variable](#module_variable..Variable)
    * [new Variable(name)](#new_module_variable..Variable_new)
    * [.withValue(value)](#module_variable..Variable+withValue) ⇒ <code>this</code>

<a name="new_module_variable..Variable_new"></a>

#### new Variable(name)
<p>Creates an instance of Variable.</p>


| Param | Type |
| --- | --- |
| name | <code>string</code> | 

<a name="module_variable..Variable+withValue"></a>

#### variable.withValue(value) ⇒ <code>this</code>
<p>Sets the variable's value.</p>

**Kind**: instance method of [<code>Variable</code>](#module_variable..Variable)  

| Param | Type |
| --- | --- |
| value | <code>number</code> \| <code>string</code> | 

<a name="module_variable..Variable"></a>

### variable~Variable : <code>Variable</code>
<p>Represents a scratch variable.</p>

**Kind**: inner typedef of [<code>variable</code>](#module_variable)  

* [~Variable](#module_variable..Variable) : <code>Variable</code>
    * [new Variable(name)](#new_module_variable..Variable_new)
    * [.withValue(value)](#module_variable..Variable+withValue) ⇒ <code>this</code>

<a name="new_module_variable..Variable_new"></a>

#### new Variable(name)
<p>Creates an instance of Variable.</p>


| Param | Type |
| --- | --- |
| name | <code>string</code> | 

<a name="module_variable..Variable+withValue"></a>

#### variable.withValue(value) ⇒ <code>this</code>
<p>Sets the variable's value.</p>

**Kind**: instance method of [<code>Variable</code>](#module_variable..Variable)  

| Param | Type |
| --- | --- |
| value | <code>number</code> \| <code>string</code> | 

