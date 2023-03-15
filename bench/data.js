window.BENCHMARK_DATA = {
  "lastUpdate": 1678902407267,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "3f02c73a1a06012df09da546f41b821fb1f1ed43",
          "message": "fix(bigquery): regenerate negative string index sql snapshots",
          "timestamp": "2023-03-15T13:41:39-04:00",
          "tree_id": "d4e97610954f772821a654b9bd4a5030828f137f",
          "url": "https://github.com/ibis-project/ibis/commit/3f02c73a1a06012df09da546f41b821fb1f1ed43"
        },
        "date": 1678902320565,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 6911793.5424367245,
            "unit": "iter/sec",
            "range": "stddev: 8.202769679675658e-9",
            "extra": "mean: 144.68024744376712 nsec\nrounds: 185186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 656454.6603056565,
            "unit": "iter/sec",
            "range": "stddev: 0.000011499089611766754",
            "extra": "mean: 1.5233344516655316 usec\nrounds: 14307"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11489.362161535873,
            "unit": "iter/sec",
            "range": "stddev: 0.00001258726813302788",
            "extra": "mean: 87.03703355681515 usec\nrounds: 298"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6779210997756103,
            "unit": "iter/sec",
            "range": "stddev: 0.0026118094030773463",
            "extra": "mean: 1.4750979137999933 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5347.506448968003,
            "unit": "iter/sec",
            "range": "stddev: 0.000022975353874982478",
            "extra": "mean: 187.00304703568642 usec\nrounds: 1467"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5293.9730581424,
            "unit": "iter/sec",
            "range": "stddev: 0.00004589844449526531",
            "extra": "mean: 188.89404781951978 usec\nrounds: 1903"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.618718428029885,
            "unit": "iter/sec",
            "range": "stddev: 0.0001562830554233424",
            "extra": "mean: 64.02573966666598 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5825.07299325947,
            "unit": "iter/sec",
            "range": "stddev: 0.000045046927784071834",
            "extra": "mean: 171.6716685193744 usec\nrounds: 540"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 705.8479838282085,
            "unit": "iter/sec",
            "range": "stddev: 0.00001825711226485907",
            "extra": "mean: 1.4167356469256178 msec\nrounds: 439"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1830635.7397325935,
            "unit": "iter/sec",
            "range": "stddev: 1.2168624436455674e-7",
            "extra": "mean: 546.2583179688565 nsec\nrounds: 149254"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 172.27570463860505,
            "unit": "iter/sec",
            "range": "stddev: 0.0036398370864242045",
            "extra": "mean: 5.8046490194178615 msec\nrounds: 206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 106.22407110014471,
            "unit": "iter/sec",
            "range": "stddev: 0.010581549734850424",
            "extra": "mean: 9.414062082569133 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 89.22072825157197,
            "unit": "iter/sec",
            "range": "stddev: 0.011922384064187497",
            "extra": "mean: 11.208157785714791 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 101.1552871021536,
            "unit": "iter/sec",
            "range": "stddev: 0.0006006914441135842",
            "extra": "mean: 9.88579073469616 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 159.79946436853217,
            "unit": "iter/sec",
            "range": "stddev: 0.000060994606414063515",
            "extra": "mean: 6.25784325342783 msec\nrounds: 146"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 36.65902406917301,
            "unit": "iter/sec",
            "range": "stddev: 0.0008192591270598031",
            "extra": "mean: 27.27841303448423 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.18185012040611215,
            "unit": "iter/sec",
            "range": "stddev: 0.009971312248661747",
            "extra": "mean: 5.499034027400012 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 25.25668086943698,
            "unit": "iter/sec",
            "range": "stddev: 0.00042153709369938754",
            "extra": "mean: 39.59348440000667 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 323.32403603491116,
            "unit": "iter/sec",
            "range": "stddev: 0.00010213695238072107",
            "extra": "mean: 3.0928724392516993 msec\nrounds: 214"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 193.60878374023878,
            "unit": "iter/sec",
            "range": "stddev: 0.000021968938159852013",
            "extra": "mean: 5.165054914769162 msec\nrounds: 176"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9160851453894563,
            "unit": "iter/sec",
            "range": "stddev: 0.0034263884308053418",
            "extra": "mean: 1.091601588600008 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 119.65310251592938,
            "unit": "iter/sec",
            "range": "stddev: 0.0006163421456383594",
            "extra": "mean: 8.357493278261384 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2456286.3657731554,
            "unit": "iter/sec",
            "range": "stddev: 1.8259704704921185e-8",
            "extra": "mean: 407.1186543779461 nsec\nrounds: 107527"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 311.4218796374481,
            "unit": "iter/sec",
            "range": "stddev: 0.00021153591413386192",
            "extra": "mean: 3.211078172041677 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 112.70486816996768,
            "unit": "iter/sec",
            "range": "stddev: 0.0007255944512680159",
            "extra": "mean: 8.872731198193874 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7339774867340967,
            "unit": "iter/sec",
            "range": "stddev: 0.0019345584948211592",
            "extra": "mean: 576.7087563999894 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 117.64463477416865,
            "unit": "iter/sec",
            "range": "stddev: 0.0007373247207227958",
            "extra": "mean: 8.500175141174998 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 30.973933741216964,
            "unit": "iter/sec",
            "range": "stddev: 0.023492130046200665",
            "extra": "mean: 32.28521144117067 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.565375386282952,
            "unit": "iter/sec",
            "range": "stddev: 0.0021312975119813465",
            "extra": "mean: 389.80649979998816 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 39.03351120617123,
            "unit": "iter/sec",
            "range": "stddev: 0.0008789532306410398",
            "extra": "mean: 25.61901220513053 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 4582.564890001342,
            "unit": "iter/sec",
            "range": "stddev: 0.00016981481722001378",
            "extra": "mean: 218.21840475884832 usec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5855.496761615515,
            "unit": "iter/sec",
            "range": "stddev: 0.00004242196804875266",
            "extra": "mean: 170.77970336441663 usec\nrounds: 3061"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 101.44377197833342,
            "unit": "iter/sec",
            "range": "stddev: 0.0005879778845386958",
            "extra": "mean: 9.857677612910352 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5613429.251154295,
            "unit": "iter/sec",
            "range": "stddev: 2.4562126035054547e-8",
            "extra": "mean: 178.14422436966893 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 105.46878498616013,
            "unit": "iter/sec",
            "range": "stddev: 0.011016281691944662",
            "extra": "mean: 9.481478336279519 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 280.58303151927385,
            "unit": "iter/sec",
            "range": "stddev: 0.00030165101226866926",
            "extra": "mean: 3.564007397686513 msec\nrounds: 259"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5849.414647793036,
            "unit": "iter/sec",
            "range": "stddev: 0.00004445363662991462",
            "extra": "mean: 170.95727696057529 usec\nrounds: 3264"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9096623861263561,
            "unit": "iter/sec",
            "range": "stddev: 0.0019394506849235826",
            "extra": "mean: 1.099308947199995 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 293.7484322648527,
            "unit": "iter/sec",
            "range": "stddev: 0.00006637531901482073",
            "extra": "mean: 3.4042734876568432 msec\nrounds: 162"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2445503.5261624972,
            "unit": "iter/sec",
            "range": "stddev: 2.4753802473241904e-8",
            "extra": "mean: 408.9137428352951 nsec\nrounds: 104167"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 304.2866847575979,
            "unit": "iter/sec",
            "range": "stddev: 0.00023021684944490235",
            "extra": "mean: 3.286374495146325 msec\nrounds: 206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5594.119325848172,
            "unit": "iter/sec",
            "range": "stddev: 0.00004739742250917979",
            "extra": "mean: 178.75914719577088 usec\nrounds: 2799"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 136.08753116106413,
            "unit": "iter/sec",
            "range": "stddev: 0.0003775974621667082",
            "extra": "mean: 7.3482117830212275 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.417447693105057,
            "unit": "iter/sec",
            "range": "stddev: 0.0006635582502144267",
            "extra": "mean: 95.99280259999432 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 483648.7126285098,
            "unit": "iter/sec",
            "range": "stddev: 3.9111645545688563e-7",
            "extra": "mean: 2.0676163791799427 usec\nrounds: 2088"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 71.50940976953567,
            "unit": "iter/sec",
            "range": "stddev: 0.00025534870217675085",
            "extra": "mean: 13.98417359649385 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 744.0955356045878,
            "unit": "iter/sec",
            "range": "stddev: 0.000020369417644155077",
            "extra": "mean: 1.3439134521718188 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7841.422347452045,
            "unit": "iter/sec",
            "range": "stddev: 0.000013390890450997885",
            "extra": "mean: 127.52788406110216 usec\nrounds: 138"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5569.453373023758,
            "unit": "iter/sec",
            "range": "stddev: 0.0000455623873782919",
            "extra": "mean: 179.55083435002916 usec\nrounds: 2457"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1643848.3472379437,
            "unit": "iter/sec",
            "range": "stddev: 1.3722990906914672e-7",
            "extra": "mean: 608.3286220898892 nsec\nrounds: 138889"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 304.7250123632655,
            "unit": "iter/sec",
            "range": "stddev: 0.00025955692092804626",
            "extra": "mean: 3.2816472538456765 msec\nrounds: 130"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 301.1390482954084,
            "unit": "iter/sec",
            "range": "stddev: 0.0002363044147509511",
            "extra": "mean: 3.3207251124039883 msec\nrounds: 258"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 119.22197637477306,
            "unit": "iter/sec",
            "range": "stddev: 0.0006860673294422087",
            "extra": "mean: 8.387715339129342 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 111.2368291690544,
            "unit": "iter/sec",
            "range": "stddev: 0.00006234537283319113",
            "extra": "mean: 8.989828346151704 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 351.6428099431051,
            "unit": "iter/sec",
            "range": "stddev: 0.00003792296851359104",
            "extra": "mean: 2.8437948160003543 msec\nrounds: 125"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 92.83637751812032,
            "unit": "iter/sec",
            "range": "stddev: 0.012144132932071163",
            "extra": "mean: 10.771639595748063 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11866.591091932014,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024360193900286783",
            "extra": "mean: 84.27019960937989 usec\nrounds: 3076"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 547.2996869731568,
            "unit": "iter/sec",
            "range": "stddev: 0.000024878148611373192",
            "extra": "mean: 1.827152515892169 msec\nrounds: 409"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1761.735980870383,
            "unit": "iter/sec",
            "range": "stddev: 0.000007481340668013247",
            "extra": "mean: 567.621942707869 usec\nrounds: 1344"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13367.571843978938,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025380532469249654",
            "extra": "mean: 74.80790166468587 usec\nrounds: 7210"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5627.072798322606,
            "unit": "iter/sec",
            "range": "stddev: 0.00004580120531619102",
            "extra": "mean: 177.7122912463641 usec\nrounds: 2479"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.83557932013258,
            "unit": "iter/sec",
            "range": "stddev: 0.000398006322075493",
            "extra": "mean: 1.1967744723999771 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 48.00052939159187,
            "unit": "iter/sec",
            "range": "stddev: 0.00021723139646379115",
            "extra": "mean: 20.83310356521125 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 96.5103971906464,
            "unit": "iter/sec",
            "range": "stddev: 0.0001516984221912446",
            "extra": "mean: 10.361577913979593 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 101.00184165296471,
            "unit": "iter/sec",
            "range": "stddev: 0.0002246215609947554",
            "extra": "mean: 9.900809565789208 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 91.96425247596683,
            "unit": "iter/sec",
            "range": "stddev: 0.000670605738844856",
            "extra": "mean: 10.87379033784167 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 278.3805806404829,
            "unit": "iter/sec",
            "range": "stddev: 0.007127813674793586",
            "extra": "mean: 3.5922045916394545 msec\nrounds: 311"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.5288696318279005,
            "unit": "iter/sec",
            "range": "stddev: 0.0001979304498264057",
            "extra": "mean: 180.8687971666624 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 10664287.563614834,
            "unit": "iter/sec",
            "range": "stddev: 4.9184495837912685e-9",
            "extra": "mean: 93.7709147502637 nsec\nrounds: 90910"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 73.6814522745625,
            "unit": "iter/sec",
            "range": "stddev: 0.00019309386755644896",
            "extra": "mean: 13.571936615386667 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 62.50824583207432,
            "unit": "iter/sec",
            "range": "stddev: 0.0007956860942754959",
            "extra": "mean: 15.99788934545462 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 94.346287900185,
            "unit": "iter/sec",
            "range": "stddev: 0.00005487607348189797",
            "extra": "mean: 10.599251144443162 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6219620.820459883,
            "unit": "iter/sec",
            "range": "stddev: 9.91925847087471e-9",
            "extra": "mean: 160.7815056365034 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 153.22084567782315,
            "unit": "iter/sec",
            "range": "stddev: 0.000055867236718322724",
            "extra": "mean: 6.526527089549525 msec\nrounds: 134"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 71812.9686980017,
            "unit": "iter/sec",
            "range": "stddev: 7.095904496397103e-7",
            "extra": "mean: 13.92506142177947 usec\nrounds: 13334"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 55.3908774708125,
            "unit": "iter/sec",
            "range": "stddev: 0.0003191556761322732",
            "extra": "mean: 18.053514326920297 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 297.83208113215494,
            "unit": "iter/sec",
            "range": "stddev: 0.00022139285110653247",
            "extra": "mean: 3.357596657145464 msec\nrounds: 245"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 161.8810284329865,
            "unit": "iter/sec",
            "range": "stddev: 0.00008719782390298609",
            "extra": "mean: 6.177376124182257 msec\nrounds: 153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 104.61005392835877,
            "unit": "iter/sec",
            "range": "stddev: 0.00042689135955764553",
            "extra": "mean: 9.55931062500781 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 111.55968567022543,
            "unit": "iter/sec",
            "range": "stddev: 0.0006965869027687909",
            "extra": "mean: 8.963811559634875 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 232.3910492076537,
            "unit": "iter/sec",
            "range": "stddev: 0.004359236550104937",
            "extra": "mean: 4.303091721516551 msec\nrounds: 237"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1162.090396588741,
            "unit": "iter/sec",
            "range": "stddev: 0.000014887025401720893",
            "extra": "mean: 860.5182548065543 usec\nrounds: 208"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 307.54023954405403,
            "unit": "iter/sec",
            "range": "stddev: 0.00022030406346421226",
            "extra": "mean: 3.251607014036788 msec\nrounds: 285"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 140183.6812545814,
            "unit": "iter/sec",
            "range": "stddev: 3.4900050478178387e-7",
            "extra": "mean: 7.13349792964806 usec\nrounds: 40817"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 100.32097919242663,
            "unit": "iter/sec",
            "range": "stddev: 0.014967835835615857",
            "extra": "mean: 9.968004778760088 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 119.3435767777289,
            "unit": "iter/sec",
            "range": "stddev: 0.0000769265764258226",
            "extra": "mean: 8.379169009342222 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 104.41616303605763,
            "unit": "iter/sec",
            "range": "stddev: 0.0007025461047773541",
            "extra": "mean: 9.577061356436493 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 87.15088930657537,
            "unit": "iter/sec",
            "range": "stddev: 0.014089492589297434",
            "extra": "mean: 11.47435221782128 msec\nrounds: 101"
          }
        ]
      }
    ]
  }
}