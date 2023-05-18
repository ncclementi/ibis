window.BENCHMARK_DATA = {
  "lastUpdate": 1684424409253,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "szucs.krisztian@gmail.com",
            "name": "Krisztián Szűcs",
            "username": "kszucs"
          },
          "committer": {
            "email": "szucs.krisztian@gmail.com",
            "name": "Krisztián Szűcs",
            "username": "kszucs"
          },
          "distinct": true,
          "id": "3437bb670e9fae20676cf39d13b304ff057bf349",
          "message": "refactor(pyspark): align datatype conversion functions with the new convention",
          "timestamp": "2023-05-18T17:32:34+02:00",
          "tree_id": "c0aaf79e59ff8384bb5f888167bb27de9e0dc7ff",
          "url": "https://github.com/ibis-project/ibis/commit/3437bb670e9fae20676cf39d13b304ff057bf349"
        },
        "date": 1684424308316,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.4939758372193442,
            "unit": "iter/sec",
            "range": "stddev: 0.0269350898096219",
            "extra": "mean: 2.0243905159999995 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 57.07003411406256,
            "unit": "iter/sec",
            "range": "stddev: 0.011277857858773837",
            "extra": "mean: 17.522330510638177 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.8286721970617332,
            "unit": "iter/sec",
            "range": "stddev: 0.0118289601983044",
            "extra": "mean: 546.8448645999956 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 123.6059026944752,
            "unit": "iter/sec",
            "range": "stddev: 0.004711083927417784",
            "extra": "mean: 8.090228526316947 msec\nrounds: 152"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 378.59170801002296,
            "unit": "iter/sec",
            "range": "stddev: 0.00023042044250597713",
            "extra": "mean: 2.641367940297112 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 195.01882350212833,
            "unit": "iter/sec",
            "range": "stddev: 0.0008563637680725402",
            "extra": "mean: 5.127710146344342 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 72.94279727254255,
            "unit": "iter/sec",
            "range": "stddev: 0.0012776525692052032",
            "extra": "mean: 13.709372787879419 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 133.2710837167518,
            "unit": "iter/sec",
            "range": "stddev: 0.0011172542181297873",
            "extra": "mean: 7.50350317646815 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 189.38685816588892,
            "unit": "iter/sec",
            "range": "stddev: 0.0006961431002680667",
            "extra": "mean: 5.280197420689421 msec\nrounds: 145"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 844.2886614445935,
            "unit": "iter/sec",
            "range": "stddev: 0.0005051948293437431",
            "extra": "mean: 1.18442902962712 msec\nrounds: 135"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 75.92858105601739,
            "unit": "iter/sec",
            "range": "stddev: 0.0011707903538362226",
            "extra": "mean: 13.170271142855096 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 64.44001208084067,
            "unit": "iter/sec",
            "range": "stddev: 0.016066909498025677",
            "extra": "mean: 15.518308698413795 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 189.9941706411272,
            "unit": "iter/sec",
            "range": "stddev: 0.0013599710288593983",
            "extra": "mean: 5.263319377776396 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 77.74456501635115,
            "unit": "iter/sec",
            "range": "stddev: 0.0013140136264831403",
            "extra": "mean: 12.862635475414663 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 82.51791693920195,
            "unit": "iter/sec",
            "range": "stddev: 0.000850914392091806",
            "extra": "mean: 12.11858026829235 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 75.7405255324403,
            "unit": "iter/sec",
            "range": "stddev: 0.0014898398413544336",
            "extra": "mean: 13.202971500002223 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 5678.055972690499,
            "unit": "iter/sec",
            "range": "stddev: 0.0000970975081412207",
            "extra": "mean: 176.11661540669144 usec\nrounds: 3622"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 82.69709935828787,
            "unit": "iter/sec",
            "range": "stddev: 0.001715887948694751",
            "extra": "mean: 12.092322557378553 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1584.6690789005117,
            "unit": "iter/sec",
            "range": "stddev: 0.00017154421400874886",
            "extra": "mean: 631.0465783138952 usec\nrounds: 1079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 6.150797110443046,
            "unit": "iter/sec",
            "range": "stddev: 0.006444880312332401",
            "extra": "mean: 162.58055371427614 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 295.2458248601269,
            "unit": "iter/sec",
            "range": "stddev: 0.0003656798032450133",
            "extra": "mean: 3.3870080990095333 msec\nrounds: 303"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 7417.687040121387,
            "unit": "iter/sec",
            "range": "stddev: 0.000051956575798015254",
            "extra": "mean: 134.81291332340106 usec\nrounds: 2792"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 32.36532757432397,
            "unit": "iter/sec",
            "range": "stddev: 0.0020237513913191436",
            "extra": "mean: 30.897261821422717 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 72.35394628529171,
            "unit": "iter/sec",
            "range": "stddev: 0.0014572151924844706",
            "extra": "mean: 13.820946214281093 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 516.9440294262208,
            "unit": "iter/sec",
            "range": "stddev: 0.0002662566851231748",
            "extra": "mean: 1.9344454004236098 msec\nrounds: 472"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 133.92400447135037,
            "unit": "iter/sec",
            "range": "stddev: 0.0004957055270216212",
            "extra": "mean: 7.466921288288722 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 243.20448847383028,
            "unit": "iter/sec",
            "range": "stddev: 0.0004252926315823385",
            "extra": "mean: 4.111766218934745 msec\nrounds: 169"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 9650.9527013021,
            "unit": "iter/sec",
            "range": "stddev: 0.00009902837798357437",
            "extra": "mean: 103.61671339090499 usec\nrounds: 5907"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 74.84831378606808,
            "unit": "iter/sec",
            "range": "stddev: 0.0014189189965618323",
            "extra": "mean: 13.360354421052241 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 195.26118211178076,
            "unit": "iter/sec",
            "range": "stddev: 0.0006849598295829575",
            "extra": "mean: 5.121345621207661 msec\nrounds: 198"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 75.84008984394977,
            "unit": "iter/sec",
            "range": "stddev: 0.0014470378524767682",
            "extra": "mean: 13.185638388055999 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 1554.3846763935355,
            "unit": "iter/sec",
            "range": "stddev: 0.0002528094024104383",
            "extra": "mean: 643.3413910900023 usec\nrounds: 202"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1594028.2300419605,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012523500331141103",
            "extra": "mean: 627.3414618094163 nsec\nrounds: 129871"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-oracle]",
            "value": 71.1014731642144,
            "unit": "iter/sec",
            "range": "stddev: 0.0013414316327052455",
            "extra": "mean: 14.064406200001258 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 22.015048258782663,
            "unit": "iter/sec",
            "range": "stddev: 0.0030239328336147497",
            "extra": "mean: 45.423475263156 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 120704.158900319,
            "unit": "iter/sec",
            "range": "stddev: 0.0000048808233102232194",
            "extra": "mean: 8.28471868004009 usec\nrounds: 30396"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 74.38984809627743,
            "unit": "iter/sec",
            "range": "stddev: 0.001806217269081715",
            "extra": "mean: 13.442694475001105 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 57.96257402700932,
            "unit": "iter/sec",
            "range": "stddev: 0.02279840001365868",
            "extra": "mean: 17.252511931820372 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.5943259888033319,
            "unit": "iter/sec",
            "range": "stddev: 0.0026229496075702674",
            "extra": "mean: 1.6825782799999842 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 83.94927969210822,
            "unit": "iter/sec",
            "range": "stddev: 0.000694994308904801",
            "extra": "mean: 11.911954499998009 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1559.901225871255,
            "unit": "iter/sec",
            "range": "stddev: 0.000232963555479757",
            "extra": "mean: 641.0662312554232 usec\nrounds: 947"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 71.78105214267924,
            "unit": "iter/sec",
            "range": "stddev: 0.0014920675071056176",
            "extra": "mean: 13.931253027780913 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 74.84887586688744,
            "unit": "iter/sec",
            "range": "stddev: 0.00046307186977585346",
            "extra": "mean: 13.360254090902014 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 144.65333586966824,
            "unit": "iter/sec",
            "range": "stddev: 0.0004884073345405612",
            "extra": "mean: 6.913079425288842 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 34.719959085999015,
            "unit": "iter/sec",
            "range": "stddev: 0.001492630778702717",
            "extra": "mean: 28.801877258065506 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 71.7132389302531,
            "unit": "iter/sec",
            "range": "stddev: 0.002049951893739253",
            "extra": "mean: 13.944426648649639 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 43.39552396677506,
            "unit": "iter/sec",
            "range": "stddev: 0.0022662529772987145",
            "extra": "mean: 23.043851268292798 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1276945.571103137,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014884884305140232",
            "extra": "mean: 783.1187347602552 nsec\nrounds: 108696"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 190.74704187184938,
            "unit": "iter/sec",
            "range": "stddev: 0.0010938312857464018",
            "extra": "mean: 5.242545258824173 msec\nrounds: 170"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 95.9291415686283,
            "unit": "iter/sec",
            "range": "stddev: 0.0006324385791524664",
            "extra": "mean: 10.424360977780603 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 563.0774757044725,
            "unit": "iter/sec",
            "range": "stddev: 0.00018104651152880665",
            "extra": "mean: 1.775954541155973 msec\nrounds: 571"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 41.10494242715701,
            "unit": "iter/sec",
            "range": "stddev: 0.0008660246866148613",
            "extra": "mean: 24.3279747142846 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.002193592114244,
            "unit": "iter/sec",
            "range": "stddev: 0.01029001605382527",
            "extra": "mean: 997.8112091999947 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 123.65793417396958,
            "unit": "iter/sec",
            "range": "stddev: 0.0008891846601875583",
            "extra": "mean: 8.08682440540482 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1552887.7602027508,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012192068987100958",
            "extra": "mean: 643.96154418104 nsec\nrounds: 108696"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1481370.3285299563,
            "unit": "iter/sec",
            "range": "stddev: 0.0000038048837424203794",
            "extra": "mean: 675.0506478635588 nsec\nrounds: 101011"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 37.47608384433337,
            "unit": "iter/sec",
            "range": "stddev: 0.0023832243209393382",
            "extra": "mean: 26.683684564101185 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1561.5323572988113,
            "unit": "iter/sec",
            "range": "stddev: 0.0002445368580102482",
            "extra": "mean: 640.3965920564284 usec\nrounds: 831"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 74.36057103295524,
            "unit": "iter/sec",
            "range": "stddev: 0.0017543588543950644",
            "extra": "mean: 13.447987100002479 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.10396295202673116,
            "unit": "iter/sec",
            "range": "stddev: 0.11658267599656327",
            "extra": "mean: 9.618811129400001 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-oracle]",
            "value": 1605.8910429626417,
            "unit": "iter/sec",
            "range": "stddev: 0.00020678756420189828",
            "extra": "mean: 622.7072530120981 usec\nrounds: 913"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4183906.886911198,
            "unit": "iter/sec",
            "range": "stddev: 7.651448186737617e-7",
            "extra": "mean: 239.01105522446122 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 0.9935269114702975,
            "unit": "iter/sec",
            "range": "stddev: 0.016909034499147418",
            "extra": "mean: 1.006515262400012 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 800804.1318471332,
            "unit": "iter/sec",
            "range": "stddev: 0.000008832401573397344",
            "extra": "mean: 1.2487448056660273 usec\nrounds: 116280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 14.087908067351535,
            "unit": "iter/sec",
            "range": "stddev: 0.0031806114999481674",
            "extra": "mean: 70.98285957142788 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 119.84751093515857,
            "unit": "iter/sec",
            "range": "stddev: 0.0009059313715689309",
            "extra": "mean: 8.343936325394633 msec\nrounds: 126"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 65.36037294576026,
            "unit": "iter/sec",
            "range": "stddev: 0.020479846075231817",
            "extra": "mean: 15.299790300001144 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 196.3387534609949,
            "unit": "iter/sec",
            "range": "stddev: 0.0007111262653002834",
            "extra": "mean: 5.09323799999913 msec\nrounds: 192"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 188.3414056057805,
            "unit": "iter/sec",
            "range": "stddev: 0.0008697500175974219",
            "extra": "mean: 5.3095069391863365 msec\nrounds: 148"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 176.08149078703312,
            "unit": "iter/sec",
            "range": "stddev: 0.004666945810758271",
            "extra": "mean: 5.679188627551314 msec\nrounds: 196"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 8182.950408481686,
            "unit": "iter/sec",
            "range": "stddev: 0.000041592576483234736",
            "extra": "mean: 122.20531105302713 usec\nrounds: 3067"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 170.37813067207202,
            "unit": "iter/sec",
            "range": "stddev: 0.0011218298435719711",
            "extra": "mean: 5.869297873238831 msec\nrounds: 142"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 18.171907829016035,
            "unit": "iter/sec",
            "range": "stddev: 0.002919051203023695",
            "extra": "mean: 55.02999516667413 msec\nrounds: 18"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 8845477.660649844,
            "unit": "iter/sec",
            "range": "stddev: 9.515081168989552e-8",
            "extra": "mean: 113.05211977962941 nsec\nrounds: 94340"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[oracle]",
            "value": 74.5351385929242,
            "unit": "iter/sec",
            "range": "stddev: 0.0013054763011435848",
            "extra": "mean: 13.416490783783589 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 25.41239308260504,
            "unit": "iter/sec",
            "range": "stddev: 0.002389596829088997",
            "extra": "mean: 39.35087879167535 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 26.02176698504235,
            "unit": "iter/sec",
            "range": "stddev: 0.002598518237178983",
            "extra": "mean: 38.42936571428116 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1294.3091766765094,
            "unit": "iter/sec",
            "range": "stddev: 0.0001295961080389012",
            "extra": "mean: 772.612925891302 usec\nrounds: 1066"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 74.55645182829076,
            "unit": "iter/sec",
            "range": "stddev: 0.0015202628833785928",
            "extra": "mean: 13.412655450705687 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.5837448229882538,
            "unit": "iter/sec",
            "range": "stddev: 0.035793775296030866",
            "extra": "mean: 1.7130772910000132 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 3234567.455704289,
            "unit": "iter/sec",
            "range": "stddev: 0.000001840117932265559",
            "extra": "mean: 309.16034792714834 nsec\nrounds: 119048"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4578626.872451444,
            "unit": "iter/sec",
            "range": "stddev: 6.546510633411843e-7",
            "extra": "mean: 218.40609157646006 nsec\nrounds: 175439"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1544.4450352665488,
            "unit": "iter/sec",
            "range": "stddev: 0.00021652875995138444",
            "extra": "mean: 647.4817666964849 usec\nrounds: 1123"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 1547.4214651681134,
            "unit": "iter/sec",
            "range": "stddev: 0.0003311789396205735",
            "extra": "mean: 646.2363502831201 usec\nrounds: 1239"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 70.41885873374831,
            "unit": "iter/sec",
            "range": "stddev: 0.002473031588472462",
            "extra": "mean: 14.200741363630605 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 76.32004722482155,
            "unit": "iter/sec",
            "range": "stddev: 0.002089043127188527",
            "extra": "mean: 13.102717259257279 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 4419837.715803196,
            "unit": "iter/sec",
            "range": "stddev: 4.444635692439624e-7",
            "extra": "mean: 226.2526509569226 nsec\nrounds: 48077"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5142526.316527959,
            "unit": "iter/sec",
            "range": "stddev: 5.424810516059625e-7",
            "extra": "mean: 194.4569533437594 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-oracle]",
            "value": 151.23357301255476,
            "unit": "iter/sec",
            "range": "stddev: 0.0015107020048693224",
            "extra": "mean: 6.6122883965518975 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3049.2313773160317,
            "unit": "iter/sec",
            "range": "stddev: 0.0001767703354028878",
            "extra": "mean: 327.9514986757782 usec\nrounds: 1889"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1553.0870020659654,
            "unit": "iter/sec",
            "range": "stddev: 0.00024433338717186565",
            "extra": "mean: 643.8789318755281 usec\nrounds: 1189"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 1560.2845761612791,
            "unit": "iter/sec",
            "range": "stddev: 0.00029330401210086104",
            "extra": "mean: 640.908726060902 usec\nrounds: 1201"
          }
        ]
      }
    ]
  }
}