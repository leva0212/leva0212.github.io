'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "19258eca3b8ec971f1e7af7c421a0b8c",
".git/config": "abb5ea4ac7a5154f8a5bfdcf22a1198d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "8ba7b6a2281c57f12935b87ae1c501a6",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "afa918e083b065a19e4a3b6fe49a9c6f",
".git/logs/refs/heads/main": "52d303d442357c88d2bc5e588162352e",
".git/logs/refs/heads/master": "1adb2bfb7114c4520e56ee389fa24343",
".git/logs/refs/remotes/origin/main": "c08cf9c37dc3aff71b309afa885ab666",
".git/objects/00/37c193a25374a0c2f38b867ba96308ceac73de": "8cc8571b3737f3797b0e90f268735382",
".git/objects/01/bd7477587588adabdd048f3f29897109f1646f": "953afc836db6f36f7f29fae4aa60bbb7",
".git/objects/02/3aaeff8d4aef35e3f6518f92c5c7df1e2b3eb4": "ec11d1830b90ce348735193f5d61c708",
".git/objects/02/5c6c4c8dbb79a048fd132516ccfa627197ab1e": "7d1c523c3bfa1efa62acc91c4a6f8ff8",
".git/objects/02/7a4e103a1045353d9df5f55aac8ce6c4bb921b": "d21cf4b1a71fa04bc245a346e5f6ec22",
".git/objects/06/8889399753b0ebf827cf7f3d57c41ac4ad2330": "ef5124e3c2c89aadb47fabe2210e9495",
".git/objects/06/93cd0dd7f4157c92c8271a3c1c0a1cfb3b2859": "c9f1abdd9194ecea79f89b809e30d1ca",
".git/objects/07/6a36f6c95299443cde1b7a68d4185cb1b02f25": "92cb5a7f9fb4c87e790cd67eba2691e5",
".git/objects/08/18133833bf225f3b4fe05344f33b23165909b3": "2cb7702f91c60a19a92306e1dd4e8407",
".git/objects/08/d4a96a2147eb7adeeecdfa69a92a781b640360": "f4938bf7186a5a534b7472a13e6fb970",
".git/objects/0d/93a992266e50bdc775541aa0f1c721229c16b0": "b089f2faa5a2e3399cf17c5667afff82",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/12/8ec84a599d300d6738b09b9a82b806209bba8a": "3d17e9cf5f6e9b67e1beba2ec95e9052",
".git/objects/13/ebc50434a2fdcba719d109defef49a3529a662": "7246aa14e9dab151d3881fc9b88fc28c",
".git/objects/14/1cc74c41a28a205d5d3413072789b6d972c481": "62be4f2bbec4a408b7b893bb6a24279d",
".git/objects/14/765a24222bab057119acb0eaf59140ba2292fe": "ca8cc25be2f0a3fea0a80d8ff87f7976",
".git/objects/16/eeb533ffa741988267410a561205849bc3ea08": "deb15e356bc1d9790403d574ab96e768",
".git/objects/18/09afd5e10258542ec89362c002dc8a4e1017fe": "aa4dc8251567ea3a1658d2c7654eaf38",
".git/objects/19/a28582b2bc8d9494a7d516777a9a6dbaec5525": "a100d237864e82e1817faad4b5454a05",
".git/objects/1a/b4f7f36e6aebf8f28be9cfcf79908c43d01e2b": "828335436aeff28bbdc3d11b494ac582",
".git/objects/1b/0e15cb9b427959e1be11c66ff4a90ac2207bb6": "7ee20c363354ac37dc6469319ef7d569",
".git/objects/1b/14d973298a45e9c69320ba827ad4fb1ba91f4b": "9b0912b4095f4a019a67379ffd0f53bd",
".git/objects/1b/3c9eab55858e80495e0cf4132bbaf24ddcbd43": "133163fe9725d9231b178a7b10886384",
".git/objects/1b/ea94b06837c6a247d146955a5beb0ecc26ff5c": "6dcea53b80f2910ff86b55870a65010d",
".git/objects/1c/d39be89e834b494e6645552893f9c727813323": "c7e3d63af4d45957729eabef2ec31a5c",
".git/objects/1d/562c08f33bad0e4aecf981bd68944171436e23": "e9f45214065a6588fba70cb0d2a89cce",
".git/objects/1d/d33b72344b2136bf90101cce08edffd0345835": "c40e6d986990d5fd798ac1301132f6ff",
".git/objects/20/8934253aa67e16d4362590ccc5a4036f767a61": "87c4a4be164b46255217b2913a005179",
".git/objects/21/439df9472f9c89e6d52031bf84b8c227babaef": "452e6b9b8a8d924cf622e96019b0108a",
".git/objects/22/a0766fa420039c96d3e7dc7832c6d48452915e": "9172eddf5a303aca51f77668fd590c04",
".git/objects/23/8278fbf981ec77eff9810ecaf848b4635de749": "0af57c7e32734b3d3d0559143c0d472d",
".git/objects/23/cd36bc5e668ce4c448063cc8084b65e0d6a302": "9ef6dc19bd1d211e2ae2b37c2679ee6d",
".git/objects/25/704a2ee0dc06bd845fc42e3390d9ecd5d4f6a4": "3fc8129da23bf525ecd47421352fa3ab",
".git/objects/26/96588a05484fa4ff1e4de925cff5fa233c56ae": "a3886303937485e1af398726e573c4ff",
".git/objects/28/29229b5707061269ca699a052fbdd9a52e48f8": "0820f0ea6ab8be871e90353093388f47",
".git/objects/28/5d3b3a65eb455d410c3bf31fccc8dbbc8cbdbc": "8f13b3e9424f71d09fc00a1d9e39692c",
".git/objects/2a/250a5d1c27cb9c88fd0d866e9d805947e3d451": "433b78306080d914d9d9051611c332f3",
".git/objects/2b/8da0921aaa36da6a3605b5309bff67dfd3eec8": "6840a147b030c43ed07c503bce1dc8c1",
".git/objects/2e/3764726eb676cd184f1919beebb907f27ebc5e": "104d361a478a720b519f53c334378c4f",
".git/objects/2e/c31d478a26ab0f547d37fbab045ce3950a31c8": "610cbc072be2efcdc4f550567517422d",
".git/objects/2e/c32b9c3ea0cde35ce029990051d0784597eb07": "f657e2d25d4484ea8b547726f868a63d",
".git/objects/2f/654cdc7f87dce66c214efe5da828cd2497f168": "750ce9bfb8772c74380a6b10aea3f069",
".git/objects/2f/fa572d35f3c434661cf919ab1bee17c03541b8": "f1e4ac299982c5abd120580481822c26",
".git/objects/30/676bcb90a8e2d5d8e361c8660d689145488198": "e85a4326f0981eadb29a9b91852f7f30",
".git/objects/30/bfeecc7ca0fa7b99aca5d57c22372f23e1053f": "2c7ea8f18b9a1e7ed2a7693556eb3305",
".git/objects/30/f091dfc525c80b4372c8e2ecb4404f90316d86": "29ebd94dcd070efcb2365ee63de7223d",
".git/objects/31/1c1f1ef76f7bc621b0812be76700735b359d0b": "342d545ee4b7406565c6b962c927b7f0",
".git/objects/31/42e8543636cf18d32da97135a293c06f451d77": "58ffe3250beb489b4e4ada3fc1f4a912",
".git/objects/33/904b3b675eb9328bee0fc7073e9a9109d86b0a": "35569b0d21af8cbeaae47a4f7b0f4a76",
".git/objects/35/01d35ade9d8f6f9708dd424ea21144d6a6747f": "7106e4cc41cde65d175a53e0f95e076f",
".git/objects/35/41412f1302b7a6403c7d12f1ac33d7006ef906": "516611542cfcdaa87fde49f157908944",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/38/351cc4ff0fa9ea88955fcc8e6412793e020cb1": "bc70372f617bd670d709804acbcd3c3c",
".git/objects/38/63489633f8ffd9ace025b33c0cc8a390a2c138": "39bd468347617af00d0a6afe99a68d80",
".git/objects/38/f4704d2341a5f7ddf59c849973ae205ff0e6d5": "117f5faab407c1e6371e75848082a1b7",
".git/objects/3a/af59139cec3faddbd9bf1080ea3ef7646637ac": "d24ec2b7a5d79a39ae1fa56c67f5eaf8",
".git/objects/3b/94121fb9957ded55c74ec1fbff0be78fd54598": "860090678cc3e38442034a5e2dd4a389",
".git/objects/3c/194cb46c8575f8da94066950277156eaaa565e": "6d52971ef08554a5d866c13d5d495333",
".git/objects/3c/5c1d84234a9241dc4f212848159492fc5b471b": "b357f7a37215805dde30f0bb05b14f98",
".git/objects/3d/1aad78b09ea84dc8ecd481f29641362fbb05a3": "de04b42d14464d528450717d8f7e0b88",
".git/objects/3d/3ee4a025d1a1fec87536562b0afd3dfab395d8": "218dfe4f265f5332ac4dc38e673346cc",
".git/objects/3e/988980c9dbec20834556c2ee2ad034052d1d3e": "815e4bad5af6fa193c7c26175ad71e06",
".git/objects/3f/dfdf247077384830bc303cb56f52626a8c48d3": "304b0880fbfc8ceea700a7b067afd9a8",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/41/60af8fa6a6c2c4208660bdfa217985a7c3f9b4": "595be73451d89863687ad2b9886e6407",
".git/objects/41/f0c4cd453a8eaee7766bac120c41faaea796d1": "959aae3ea145f41879ac00bb427b39fa",
".git/objects/42/90ad72f8e75bf0aa552a8682fe93a13e103747": "1a63a6a3702e38f2dfb03b965bafc6df",
".git/objects/42/d1ee6d63671d030010192ad699a70ebe538fdd": "f4e4eaefc1784ee6789960fb9a4d95ec",
".git/objects/43/82c4b54b0c4f028cc397dbeff54064b0b3b867": "e18446dce99c445a8c3699aac212716f",
".git/objects/43/adbd219019fd42f817c7ea2f41885be0e601c7": "39dc4f365990aef2f79072badd90e4fc",
".git/objects/45/169c11c48cbf81f7ea32e3f9fed55582270751": "d95db41ac4d2e0e1dfe2b1046e511e2b",
".git/objects/45/a504f3e4ac10e5992bbbac208b64043f5a3c1c": "cb05505585f74142e836d65ffb9f185c",
".git/objects/45/d97b51e4410f67a95a06cb18548da8ad537323": "1411e29c3390bc069cc08d4a0c4fde8c",
".git/objects/46/88eb3a6907331a3fab332a5d3c106dcf29d921": "57f134545814d7d6818776d8b606bfbb",
".git/objects/47/8cd363f375c897970851c600f3dde577214f5c": "b09030f5e84d3ef213634b09fb3b0d93",
".git/objects/48/f6c83f362c2bc92ac105413f101169774afeab": "aa3d705ab311f8bb63f9b31199a31532",
".git/objects/49/546a7433e91de9f7a18baa8427f0cfcb7094d1": "e3838db4c3f14fa3814adfd1f4beae9c",
".git/objects/49/938d3f0c07beb7194c72b623c46ebc2acc28a1": "c52513b902ead034bc9a32ad0ecef9b8",
".git/objects/4a/9ab273df78313fb0d80ed0749f36c49f16f869": "432ea229fb4bd19fd21f02fce3ace51c",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/4e/188571cff372667b5ee594a9b6717c72bc514b": "a3ce1f2d1bef5b44dc235faff79b0973",
".git/objects/4f/91517ed50c012b9003e1a97225b10165078604": "54d2aa4edc368cad354bb8f38487fd72",
".git/objects/4f/d9844d9a1a33a9065ca8ea9d1ccf4d4aea70a5": "60b00df33b8ca631d84370c1c523c140",
".git/objects/50/3e99e80cf1e084efcd2162dfe0ec492a7d74bb": "649f9d2c372cf4b34e6feda3a301611f",
".git/objects/50/600a32de00e674217efbe502ddc24ff5c107ab": "0c0727d29d13b9a589126430e2d03ba5",
".git/objects/50/d9b8963ba0ac5bfd26abae8754e5547af4aea4": "4b4ebad2563778657b72b078501fc4d1",
".git/objects/52/47204aa75209c3c3755496c4010c985cacc00c": "249254af2db70cfe4110f1784ba915df",
".git/objects/54/c3ab521953158b2a32ad284e992c602db77a7c": "eddca84124f77c45adf4bf36d9fd31ea",
".git/objects/54/f379fa9221e3dab2d72d78a46241b7d2130656": "17d52b373a7f7f0ad16511159379d052",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/57/fcb636be28ce40ff1ef5df71cf0aba7c65e587": "edc926f662e4bf1e7293010b1f17a3af",
".git/objects/5a/0fa7ffbdcec9e32af1911a3e3c27ed39769c23": "ddb979d9b8bd1a94d249a598b6f9d473",
".git/objects/5b/2a9f2cd2c14027ef44b4ae74506e16b196635e": "61987968eeb4c6d240f0abe24fce5505",
".git/objects/5b/71128e13033b9e6c30c21735793c258809b93b": "d82a056c5df1b545529162450ad69c85",
".git/objects/5b/8e0d1660f521c6724513578399e9bf1b87c0fa": "aa8cde0b94135957fa3f624ccec1b8f7",
".git/objects/5c/42c8730fbec1e5862e1c7bfecb8aa5fc27f550": "2567b663954daa7fdb3d4d99f4f807a7",
".git/objects/5c/616b55fbd2beddcd30e71dbe9a5b39155b18ef": "37d13b7a602b1f0b4f042488735e2e8d",
".git/objects/5e/bec1aacfbd1a99e8f4fbbbd27c58f6de00f617": "53381471e3de3180d6543b0a0c025e54",
".git/objects/62/84aad656d186efcbd2158520f27d6bc9f58c59": "2fbb49f722f3d0cd18207a834d0156a0",
".git/objects/62/bc70fc23e0de77a0951d9b28849f26771ba8ea": "7e85004d0e4afacb0f74a079a8b01dfd",
".git/objects/62/e7e1a7d74c0b4e4929c51c0eee450e40dfa10f": "8e7260fadf2afae119883466b48cbe0b",
".git/objects/63/b6277baf88964ec88e08059643c37c65cd9914": "0e7a9b53031c9f31a1ffd01216ad2f78",
".git/objects/64/330c5be3d21a6169b7e9477ec3b208e9fda8e7": "41e3e82a7887283b210de3d621068f8d",
".git/objects/64/af5635c46e3fde35a03563a5305912b143f626": "e4e9a1f295cb9bcdcaba1cd5bd9e8e7d",
".git/objects/65/1fb2b91bac37639aa9e73a02974af5afeb8fcb": "74e4273db2c2139b633f35fae51452e9",
".git/objects/65/63b84dbd92693787ecc0de2f03de079d64956e": "e60d436b530701060a9742d50f321ded",
".git/objects/65/c6321a2a700261b967213c455fac35c8bb226f": "e1f333b6f7539354a4205c68ab54e20b",
".git/objects/67/f310c0c134fd1e90bbe318d0c2258d11893c22": "167a6313905ab48c3e5f1dc04ce0339d",
".git/objects/68/1294e5964c065702f9a14dfa21ebbb4b2c0a7f": "8a79f31e39297c731ff6eb9b109d299a",
".git/objects/68/2c4af43d400a1b34e703bf7feb9582ad8c3c19": "fd9c12b64703dbe4fe989ccf6d8be300",
".git/objects/68/643b857284d2887f644e8e811a696c2fe9619d": "62f7d448d3255efdd80810e514a35e1a",
".git/objects/69/183e648c6c6d6c140a31d14d7abfc67acec5fb": "9efe867ab4b46c6d5226acef52f3897a",
".git/objects/69/300b9a7b503eca8ccd394c52f904349414d44f": "857ef540b313f488d727743cbd5448ff",
".git/objects/69/bd73aac31f873f01f0f64281e70ebac193acf3": "cc439261f56957b2fd9e27c2c201ac65",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6a/ffa3413ce15319e25b448a085eac8efae3de5d": "1af4c4dc255c0ff4e6af369c91cc0101",
".git/objects/6d/cd580199fcab562c86c6ca3538db396e1a03a5": "bb3ba355472c5434e5e9c5a213006f05",
".git/objects/6e/268d3ed1c08194869f39706fcd10bf4268127d": "bc2119031136da9f3cb19b9a05db52c0",
".git/objects/71/5c8fd2be9f6710fc9476d2a8a6ab2b79b118c9": "b8d34679f8e385ece8d49f8bbd763e89",
".git/objects/72/18c0554422a8e2826cbbf0f7e8d3291f947e3e": "6b1a535fa915606305aca45bbda9dc74",
".git/objects/72/38897c3450539f1eea82120a6c75b54809a9ba": "f1f23f481cd8c3aa85f629765031f0ea",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/76/fc7db1bb60cd043f8fd0af2eee405a821d4f86": "94336ad14f2ab3df195ab269aa1869d2",
".git/objects/77/9f860d0a4d8dff89d99c991170610598cf002a": "6d22d9abf033a071f69caf265ac0b5ab",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/3292d5601766ea5a290dc85166aefdb49f7ab9": "4a833a15c343b53ed6b5e68d7e32b568",
".git/objects/7c/88b7e558e7dd55e9b75792382be88d053897ee": "46640df2e786f94c18a177b12ae9b816",
".git/objects/7c/bf6f1bd14f4380709ca31ae2d2a5020dd14e66": "9113438a5597963b988ef432df11e94e",
".git/objects/7d/2da3c26b9c1e7cca51631ca04dab47983c170c": "d9392409616e4c23bcb9f894d4ece9e0",
".git/objects/7d/5a28202da251b698a1cafcb35fc9d22fd6feca": "5ed038e879a8d891d0b9836bef9178a6",
".git/objects/7d/bfc8dbf55a3525b61fad1ac453d3a8b3006c1b": "84f5d281b38bfc25e611194c8c8aeef7",
".git/objects/7e/3f5be7bb099ee526ab78ca8e63da08400be551": "bd7fc93ad0b264b41d82e48469a14180",
".git/objects/7e/4fbd7e5e9204337cf802f87186944f6e59c910": "3b63fa4cdc6c2ebaaa10c7089112a086",
".git/objects/7f/08e48b9bfbe5a4a8ae6d06d9263fe53a287319": "98360d648ded97e79fada65ae1b58481",
".git/objects/7f/873fb66cb9f56f00e7e1f57cf7f4d0ac364f37": "38742e75979ccfbb62a447b2919a2225",
".git/objects/7f/9aae7eff4ff3369038d57a9656e232d35b60ab": "5e6e008957d0f477b40658b0e5694a8c",
".git/objects/80/7fc13cfd917fb1f2c978da2b853f2cc1351024": "7b1915decd33094967a25eb99c24591b",
".git/objects/81/11e9b334bad1e32b7a7dceefa236b8bfd1eec2": "01e30645939e9951a0d31ff733aec1dd",
".git/objects/81/728f276adb877a3bd6b63cbbae0a7a84e9b168": "bfb1f95604d463fe1f80bcad9f01f907",
".git/objects/81/f8da657f4d111d76b4d2cd5a7411b77310dc0d": "8b8ee3407d538b030f8eb735009c6074",
".git/objects/83/22a44b76f8448451048bf5d40e728223e2a8c9": "4fed75cd4f95e141299eaf55ba84f05d",
".git/objects/84/67b2a021ec3e445e436a9714d252a8d4cfd50a": "f73f8927b12801ccbce3ad4261b40272",
".git/objects/84/bbfd3d17fae98545660c0e5d9c4a15b7de5a6f": "024a9fc892cab2ba082c0996c89f70ea",
".git/objects/85/2de692a5fcb31d3d3412b017a1f8cca6a55ea8": "31b553ea605183a7b17c51450c3e5b33",
".git/objects/85/7e9b71b28d24f3155623f5f12c3685eac84445": "aadc637c41205e739c94aa7a6e3446d5",
".git/objects/86/f0ec26b737f319d1a70a793b9b14704acad4ea": "1b2f714b2e18ab7598c03075134b49b3",
".git/objects/88/7bd01029ab1f424bfccebd1bd9558e5e0c2cac": "c833255e5901a0064f33b6ac4c4e28ea",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/8c454fb6fe50c7f05cdc2db89df05001d7789a": "f59660eb83869db55bb29a29b3834420",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/5c67ba866710312ebd1ce65634808f0df28020": "6f75b17cc0c8eb25e23b7125f24a6c31",
".git/objects/8c/7b385e7646114687a7f91a25e4dd75da7453b8": "a4bc076687ae13a58ed22e9a5781c41c",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8c/c1f9654bde7a4aba3710b9c703ed37d33574b5": "7867684ab009729d079d5c566074402a",
".git/objects/8d/0270af1ba19b16ead169d066e36a27b7a4fe67": "77f40e69984550c1ccac3809f514ba2e",
".git/objects/90/6b1e28cec9f785c796184a6707cabd1994923e": "3654662ad312628725b4d086419d8824",
".git/objects/91/afe4d68f0b1bd0bfa7d5ac1fdd2ad785ba1d59": "8bedaf7efbec7cdba9fe680b56337763",
".git/objects/93/72451486c6bd6961ded3007a8c99e593a4c902": "345fe6eff5e8f2f6e7437d0c4a2579dc",
".git/objects/97/766c9e501d7865e8300cb2a840fd2f0147bcf1": "712ee03d0aa7e058ddc91db2358c0d2d",
".git/objects/97/d6572e788ceaaf383548d3304d9c4c88fceb47": "eda8b836f78079f66cfb480ef4c006a2",
".git/objects/97/eecd7f8317f2c5a65833414061242028da2289": "82df19e29aa3eec9e40d93b2dcf994bf",
".git/objects/98/faec38995ca1dd1821c4a8f5d75086f9170293": "b3b272f295eff2853e52d7a36ac6aad9",
".git/objects/9a/390ad844bbcdf986a7135d6b2b9164154140e2": "d5e9ba36bf2b3327c70302e22e3cf3e5",
".git/objects/9b/48e2e78402204be12cf5c71117f4b7b44f69b3": "d1db2ec524538632cc3b12bd1089e9c6",
".git/objects/9b/7cb86f4257f3ef5eb03488bc6dffecd0da3d0c": "2b7c33cde39a320f6bccd9e691a61c77",
".git/objects/9f/c2a622c29a3e77c7e4e48f621ea4796b158b12": "efe7712751ea10e0d4211fd20f9f7c65",
".git/objects/a0/2adfe51abf425d2c66dcd46d517608b870652d": "881bf4c481ce4feb82f780ad4c2c191a",
".git/objects/a0/59c049b8dd1cd012e22a23130ca1153091bf8f": "c079ff9c2b0ef72fc7a5d798baaf7e84",
".git/objects/a0/ae291e3dc6c662c5d89313e92a5753c8e3863b": "1d893fa12b46dd1592cc0f89a8ae0ccd",
".git/objects/a0/ecd79f750d36ebcc26b9b64f789d598017be98": "f3d6030f1a5063a0d0cca24d1d7f2244",
".git/objects/a0/ee7b46eb1b03b186757b34b972d5b26b05b12c": "c7cbe4fc2862149b3331434f7bd2624f",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/37fc2eb5f156076f940af65b7625733b8231b1": "f11106f02791e22b5cd63e39b6e99695",
".git/objects/a2/d4f01e5e7293afe9c261b3d9f04ae35dd96739": "89810354053460b7ead9b0ac97c8a333",
".git/objects/a2/e3ce51774e58844bf724434d58c53c6475eff3": "693bef928454cd1b82f4062925ca5be6",
".git/objects/a5/47d7530b17547f40e077669375b1875461b335": "9e2b85de372e6f80ffa977145f86f3c4",
".git/objects/a9/f255d43911b29090df65f4599919d38ae2b470": "e90391bf8a47a3edfac72f1373034434",
".git/objects/aa/9f93426761e7440403246c47bfebb4bc6b86af": "fea358826dcc09c79365115af50dbbc9",
".git/objects/aa/d329f194df3b6d7ea5adffb41b2d1e658ad376": "0ee67ca0cafc2bee33ce2302fdeae26d",
".git/objects/b0/b8262cda4603c4d44b4e681d8d31d42655b856": "eec535bdf010260e4f72a97b7a806dc0",
".git/objects/b1/7237f672512d93cc39a07b18f55fea34ef9537": "79fab54419ffc52306105d87984135e8",
".git/objects/b2/4081ff69a0cfa2e9a3763dc6dce8fe7554961a": "33ef3cb844a74ad73e960764e1a37737",
".git/objects/b2/e23a791ca0ecd20dca219c3ee47173da307e4a": "4b4ad4200d7d3033ff9feb4fbb1da148",
".git/objects/b4/1199de504b3d602451fb459b82ba6ab8bed99e": "fb3a4ce217c36916c8320f837b65b24e",
".git/objects/b5/78c8b1a7d4a47282634dec6934e0c8b4930a33": "8f14e1d5697bb65b1e01c887983ae5ba",
".git/objects/b5/7d178596fbbee0b371411cf769fde2c5c8c59f": "5351cf6b24b7cee98e00da74af43dbb3",
".git/objects/b5/8b0d16285c9c01dcb3ec460b9b9b57414ea531": "fa078fb9900f67be1f8fbb2e906a888e",
".git/objects/b6/1c1a9c6701aa2e414b6d732383b59776a1a988": "8ba736f24a3295398f66df50f0d3466c",
".git/objects/b6/296a7a5c0f7b126c8f9c7ef47ba5a6f1e20196": "ed7f8a94c69c0087a8706524ebf7e868",
".git/objects/b6/4ae16ec8566cb0ec5292d7ad3b62dae225ed9d": "02ce715546ccfe2196dac0d295321a04",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/f8abc63e42cf6def7a433393f5562c8076b142": "07cefbb0bb3debb45f4b34d914d0c595",
".git/objects/b8/664592fb780c0eff514528b8cd63fc4a6d68a2": "5a693a8c4f6dcba5e19c0c8715291e85",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/ae7cc56fd4b9501f2af1c4bf128c48a2ce10a4": "a2fc0bf261167c21c43908b494772544",
".git/objects/bb/a788c8288243403116c3549ab80a1fd528a1eb": "abaf5a026770de7b463c276976a7befc",
".git/objects/bc/777e670cb283b756a14ae89224bf86720ba892": "6daf74288d86609551598bbb83bbb0d2",
".git/objects/bd/7982485a85a1b492dab644d725d7b67549df58": "32ea3f035081d4678d9a74c76343a57c",
".git/objects/bd/f4873553d5d02eca47f4d25d273f24df0e6990": "98a626853a93e5c702138d1b119c518f",
".git/objects/be/7c88ea86d25912525e1e2b90c5ff2bec5f7423": "8b149ab1134063adc6d3e95959a0cdea",
".git/objects/bf/b34b1d678c1de94ad5a4c659a165e3a8018c38": "1eff6aa3b513324b37786ae0a4a4accf",
".git/objects/c0/2998a5692bbd01edd25686b825da0d07df4c82": "f7c13d8ed26f1ff65ed43c1cd6e2a14e",
".git/objects/c1/c485b591f0829444650e59a80d24ec704c41c2": "475a27fcb3549f4c8cb74abd28f020ab",
".git/objects/c2/0cc81dce8eae725ec0116699098d5559c39661": "12d9dd63369e02c05cc27375dd1113f0",
".git/objects/c2/5a85eefdac86418078bba4cd2c3444de7fe119": "94e07fdc72b2c914aa524847e9c5111d",
".git/objects/c2/a8f79d182e64a040a6da1512a51a163a2858bf": "34ed0d61808f3e118f1d5abf4575c817",
".git/objects/c3/351beace5306f6005e4732ab7493541a219e48": "0ec4fcbe4ba685c1aa9ed0122dac6cf3",
".git/objects/c3/a93f966b4d1a26b1325a31e61a01282c62828d": "c54b21a511dbbce9b8006bbc2e02bf72",
".git/objects/c4/5e2237688667ae736c5ad9938fde54e7d138e7": "43fe1a04813052640f0bb7ba5730245f",
".git/objects/c5/ab97fea9ab21fbb941359ea30cda31779f0363": "e24d18b6b141799f3457e22561ab4c7c",
".git/objects/c6/6741e9dd743158bc7ef49469ffb12f383d7b92": "5b1e92479d7ab072779380a5394eb467",
".git/objects/c6/8d284b3ff5677d0e335b7e749849d8468ead1c": "11cfec88dd1b62eacefc0cd8738bb90b",
".git/objects/c6/daaaca376214a55a3420cae5bf61102525da7f": "ec8c54fa31f27df6356679d3459771f5",
".git/objects/c7/58dc4c9fa6106afe6477cd1072cc332f05c32c": "edf02ae88ecdb9729987f2f30512b62a",
".git/objects/c8/5f505ec6be348d7c350866b4fdeeae6d0de31e": "d67491716fda44432cdfafe46662308a",
".git/objects/cb/045bb7f07f45d189fb5e19b04b5a2d4358d95f": "3633c5792b8c56e3a8fa783098ff19a6",
".git/objects/cc/6bf38a519294192c553b1b127bb7fc2d4764df": "7895e975f7fd22df70b196bcc079b8ae",
".git/objects/cc/e3ce1cbbb0a50e86360746e597e82e6051bf4e": "1ef814a7a22871b3c21786247db9d203",
".git/objects/cd/6b6dcd7579a0b0f5b8189172108a63bac71b76": "ef40d179492f41024701454403d9247c",
".git/objects/cd/ad20e28a06a45252e6c34d35022458326e5f53": "8d07b1c43c8055ae5d8460d7622144cd",
".git/objects/cd/c12e84f391bcb4d66073d591c7a9d85fec4d00": "4af38675c9cee762c2f32e8fdcdd2c96",
".git/objects/d0/4a13578581752b28cc20e7f0fc7c300176a87d": "d25fbd2b6f2cc9808f2f1f112a250abd",
".git/objects/d0/5f5ca1aeaa41bee5f22d8961b017183cc9ccd8": "fa775b7a9f3c7fb522a4167a5be9462f",
".git/objects/d1/e69226b2cda280f9b778b8b2f6d2dc5daf5fa4": "afcadfd17b55f425fc768ed18be4d812",
".git/objects/d2/1e4a6f14c5be6ca279836cbb6bb5def7231ee0": "71aefe2e2f6cf75cded1fac1c7d58229",
".git/objects/d2/50f0bf4c87584115b2be21510f4d9d7650758b": "a0cf7b90173fd5ea09be3b0162da79ed",
".git/objects/d2/8e71a827366ebbc2d69eb48b641b7770bf8006": "4a46393fea4b3297a361824f39dfa377",
".git/objects/d2/b3f539389adfffa9cbfe28f92573af420f9d3d": "3d2c9ad409e0e5816325ab4493912317",
".git/objects/d3/1532c426de906b652015f2090d483549daf8e8": "416a1430875bcfe2b828d3b71072d22c",
".git/objects/d3/b6e92026c5e258f224f1a538e01ef98daa6118": "3764159466ab4deefed372a87d011bcf",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/968b973e0e0157eb7c40511d080511bbaa800b": "7beb2861bd52d2ab8e788f37d0228aba",
".git/objects/da/1c646bd353cc9d0299c07cbe6a23f858365895": "bc72f9145d8bd46708847655de75454a",
".git/objects/da/bbe01e6bbf39dd92ed33e3cc1c5653bd2a0e58": "e758ae5003984f866bbd1843a02a7c18",
".git/objects/db/6bbd557cdba4d548787ea50ef70ee027df64c4": "dc6da68e45463c6bea250e5ffb3c8807",
".git/objects/dd/0883d806b7c88983a324529094c25dfb52bcbc": "b18737b6e93f995739ff1a63051babe6",
".git/objects/dd/698f2f9e6a357b572570ac2c5c67a40be23614": "5d05e0755fab31a382bfc5c95255f3cd",
".git/objects/dd/b03fc98d77ccc21c59c3816563117d314a16bd": "9effb9cb10376ec2ab83ec6273a4a889",
".git/objects/de/519cc3c1de31b9e55283dd1e76fc2677d5fa30": "99170c85019d014e0fe2b4e52b54b3c9",
".git/objects/df/7ff5b3ab667b6c97afda0b89815013308a1a08": "40bb995d4024838c09bf832b1d6f630b",
".git/objects/e0/0f4bc93956f597b256bfd600c9831dcd6b3610": "91145e22b5848ae53727647158f830bf",
".git/objects/e0/527b21ebfcd4a32ddf8590e6e04d2cdf900adf": "17c1c3c3384bf280c6c60973c775ddab",
".git/objects/e0/8788ed9707e908883bf7c98f838e95644bec94": "2f20d01b35ee53a786d25cbfd7237f13",
".git/objects/e1/50b9c97eecfb53fb9bf6db28eaf8e335463fad": "9a26108103fb3aaad1a67f4380044571",
".git/objects/e2/4cef2a9c4abd0f45c09beeaef4f068e5b9e637": "a8258c02d1288cc4483246870728c658",
".git/objects/e3/526ae5cf5d06004bc4933a3b5d6956147cac97": "d085605c2ab6bc22fdbc2248db26154c",
".git/objects/e3/809e9cff1130d2a5301462149db5c81d8d4ab6": "05c53e4e2a266eb4e660929ff5767d24",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e8/b1efdb2b81fe0b2dfee4424b8ad8385a735633": "4bada513a22ddd64fd77d6c9f8e19354",
".git/objects/eb/80177286c2e11cd62241bde16f32cb1a29db91": "8b9d2417363b64b07200111f3aa4c0ff",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/110f1fc5bc107df2c909b1fed12e69a27a4887": "63a9bb7b5123af1b0d791f93f584e6fa",
".git/objects/f0/4cecff47aa618c97109402547ddffbf88b3919": "87f73706fd6f90b5628bbb23bae7db70",
".git/objects/f0/d8dee440df6805d4de7e6f8f548aad1dd6bc6e": "10ac68730828551e4fc11ac945d349ec",
".git/objects/f1/1799493b92298994d7f74fbaa7a18450b57b70": "82569551f6d0eee834f257dc0c32bed5",
".git/objects/f1/6b586918ae57b838e8c23711d7ff36727d69ca": "75d81a07f217b8831742764c638708b6",
".git/objects/f1/7d47e7f94aa905ca37ebe2dca9a02e20ab20c4": "94942129a08ce799df854ef1dd2b01e5",
".git/objects/f3/af7bd229a83f5c87df26f93cd4536e5a55035e": "7cd081781d40c4e1a37ccaa520e9d9d6",
".git/objects/f5/87579ac4a431cc1baa01e22c492d87acbbf4c3": "732a91896718937aa446d4569b180416",
".git/objects/f6/54818763b7d62cf45646ed451f1c4821b06984": "2a0d2e837e4c31e83278947b089d806c",
".git/objects/f7/1b4f3ea9444c63fa3b89a8011ca835e215fe9b": "d8f364c6ef888a6a0d259b6e89ef8d53",
".git/objects/f7/bc87990fbcc4a0eb5f53df9ce6c11a6281f431": "38404ba3e67eff399cbc422f1de48a57",
".git/objects/f8/b26bff9336ec3e30e4e25836431a621996ac2c": "8dae09ece66d38876b3399ff594c68d0",
".git/objects/f8/d3c0cef6e7f4780e4a7d910d725587b9a89229": "6b600521446575814d7f94560c9bc8ee",
".git/objects/f8/f2fbe0179a45d7af604942ad22e52085f0875a": "14c75bbde1610b461ad43cfa55a76daf",
".git/objects/f9/144d389a7a6e6596e5d718aaacdfd73ad1508d": "3a0e977f7c662463e4e94e2ad6dedacc",
".git/objects/fd/d92fe2e4dbe49f5cb3a6f4486fe32d400b02ac": "148dd4d6aa8913bf2561503b406b54fa",
".git/objects/fe/329c069a45a43d8c9abe9d5a8dcee91ebb2d28": "13d284f214fafb76e41d5169491cc2fc",
".git/objects/ff/399dbd08406530794a6624960cc4debfdfb4f7": "9f3beac1079f4d3c7c77b8d19537cdc0",
".git/objects/ff/df20c820ccdb3422c39ffe15097bd3761ec021": "e68c426137fc59fd9e47e1defb778838",
".git/refs/heads/main": "3e07137f00576c715f9ba2648ace71d0",
".git/refs/heads/master": "888f6b502f2084aa4ad73d6e2940d84a",
".git/refs/remotes/origin/main": "3e07137f00576c715f9ba2648ace71d0",
"assets/AssetManifest.json": "59c08a2cf7ff625f202ff3c421596dfc",
"assets/FontManifest.json": "9ca5dcfcd70a3310e33da7169e2df95e",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "33eb9d34e347c5dc625cae1eea374c8d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutterfire_ui/assets/countries.json": "8c937aac9f3b69162be779fbcd6199d2",
"assets/packages/flutterfire_ui/assets/fonts/SocialIcons.ttf": "a1207fae1578da27a062cb73d424aed9",
"assets/packages/flutterfire_ui/assets/icons/apple_dark.svg": "1b587ffd7d75c462847f8137a93f3161",
"assets/packages/flutterfire_ui/assets/icons/apple_light.svg": "2508cc7c5d302fd37edff1b87fedb594",
"assets/packages/flutterfire_ui/assets/icons/facebook.svg": "5fad3daafe7c7c5163fca56662d2738a",
"assets/packages/flutterfire_ui/assets/icons/google.svg": "3b5ceaea5e2391782d39df225a375d5d",
"assets/packages/flutterfire_ui/assets/icons/twitter.svg": "6086e2aad26effea1344c8e118520e32",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "99f29024aee8f4672a47cc3a81b9b84a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "48ce1bb8a42776caa951cb782d277730",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d8e9b6203ce2657c991f0b339ccb3a6d",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"firebase-messaging-sw.js": "b4d0d3dc366ba0e7dc7a0a2c17f1b01e",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index%2002-02-2023.zip": "0dbd142646d7d99fa6fc4c8a21b636af",
"index.html": "430816e43c898d8dcdca63242164d333",
"/": "430816e43c898d8dcdca63242164d333",
"main.dart.js": "a6d571252890229497ad2f14c5d33281",
"manifest.json": "7439150e829d1b33bcf281076e0c799c",
"MensajeriApp/firebase-messaging-sw.js": "b4d0d3dc366ba0e7dc7a0a2c17f1b01e",
"service-worker.zip": "86b0403c6c781bf3637364ffa8bba1c0",
"splash/img/dark-1x.png": "f8e53551a772e511d2174effc3107fb8",
"splash/img/dark-2x.png": "1eb7436a1929438d7effbac4560b343d",
"splash/img/dark-3x.png": "dc4caea6989fcc374c94b75ea044cbfc",
"splash/img/dark-4x.png": "ca4b594251f34cb7101b6b1b814b5cff",
"splash/img/light-1x.png": "f8e53551a772e511d2174effc3107fb8",
"splash/img/light-2x.png": "1eb7436a1929438d7effbac4560b343d",
"splash/img/light-3x.png": "dc4caea6989fcc374c94b75ea044cbfc",
"splash/img/light-4x.png": "ca4b594251f34cb7101b6b1b814b5cff",
"splash/splash.js": "c6a271349a0cd249bdb6d3c4d12f5dcf",
"splash/style.css": "db6178791b6369b77311c0ae92809585",
"version.json": "39f820f20c5bd924b2f96a32b0457f8d",
"worker.js": "22d119df17bfa31fe6ba69f385b93b5f"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
