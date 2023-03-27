window.BENCHMARK_DATA = {
  "lastUpdate": 1679956272303,
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
          "id": "d40b23d2285d2c9d8dca1efddf6a29c57601dcb2",
          "message": "chore(deps): bump mkdocs-jupyter lower bound to avoid `execute_ignore` type change compatibility issues",
          "timestamp": "2023-03-27T18:19:32-04:00",
          "tree_id": "6082ad2c92c3ce279a283a822e02823b785c182a",
          "url": "https://github.com/ibis-project/ibis/commit/d40b23d2285d2c9d8dca1efddf6a29c57601dcb2"
        },
        "date": 1679956168376,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 52.143402758062635,
            "unit": "iter/sec",
            "range": "stddev: 0.00043849206697269157",
            "extra": "mean: 19.177881517242863 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 122.28826038827685,
            "unit": "iter/sec",
            "range": "stddev: 0.004868764989752255",
            "extra": "mean: 8.177399832370703 msec\nrounds: 173"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 20.547922856085904,
            "unit": "iter/sec",
            "range": "stddev: 0.0009176798652168754",
            "extra": "mean: 48.666719600021224 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 4715.567374171442,
            "unit": "iter/sec",
            "range": "stddev: 0.00006261293330330297",
            "extra": "mean: 212.0635589849264 usec\nrounds: 551"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 99.00276029348066,
            "unit": "iter/sec",
            "range": "stddev: 0.0007851716470924963",
            "extra": "mean: 10.100728475000409 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 98.32151858148401,
            "unit": "iter/sec",
            "range": "stddev: 0.000875891715785799",
            "extra": "mean: 10.170713536846458 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 262.4141942246423,
            "unit": "iter/sec",
            "range": "stddev: 0.00031097491762483836",
            "extra": "mean: 3.8107694705871737 msec\nrounds: 221"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 86.49145611179911,
            "unit": "iter/sec",
            "range": "stddev: 0.0009410702534614244",
            "extra": "mean: 11.56183564197829 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 4269.798105041177,
            "unit": "iter/sec",
            "range": "stddev: 0.000053814149888272574",
            "extra": "mean: 234.20311110713655 usec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 5043941.382982533,
            "unit": "iter/sec",
            "range": "stddev: 3.145853134954223e-8",
            "extra": "mean: 198.25765687402352 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 138.589860183653,
            "unit": "iter/sec",
            "range": "stddev: 0.00013829153373586442",
            "extra": "mean: 7.215535095243226 msec\nrounds: 126"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 64.01813227627956,
            "unit": "iter/sec",
            "range": "stddev: 0.0003238037870754782",
            "extra": "mean: 15.620574428575244 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 31.993873155002703,
            "unit": "iter/sec",
            "range": "stddev: 0.0020190987788951988",
            "extra": "mean: 31.25598439286291 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 418983.897818953,
            "unit": "iter/sec",
            "range": "stddev: 4.915129917254532e-7",
            "extra": "mean: 2.3867265668336253 usec\nrounds: 1803"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 71.49971775168387,
            "unit": "iter/sec",
            "range": "stddev: 0.0008423064828424904",
            "extra": "mean: 13.986069196426294 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5708418.987528846,
            "unit": "iter/sec",
            "range": "stddev: 3.00969552974141e-8",
            "extra": "mean: 175.1798531580759 nsec\nrounds: 196040"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 257.36222505043366,
            "unit": "iter/sec",
            "range": "stddev: 0.0002961907937521511",
            "extra": "mean: 3.8855741156420147 msec\nrounds: 147"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 246.35519749608326,
            "unit": "iter/sec",
            "range": "stddev: 0.00010177296734009035",
            "extra": "mean: 4.059179632351369 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5754725336613284,
            "unit": "iter/sec",
            "range": "stddev: 0.05682360058060759",
            "extra": "mean: 1.7377023949999852 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4565288.132071394,
            "unit": "iter/sec",
            "range": "stddev: 1.8188749686755584e-8",
            "extra": "mean: 219.04422482663327 nsec\nrounds: 178540"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 36.327506206854046,
            "unit": "iter/sec",
            "range": "stddev: 0.0011809651749870999",
            "extra": "mean: 27.52735060606297 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 130.40011318705004,
            "unit": "iter/sec",
            "range": "stddev: 0.000239138383812473",
            "extra": "mean: 7.668705000014597 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 450.19661513735264,
            "unit": "iter/sec",
            "range": "stddev: 0.00003956559484416942",
            "extra": "mean: 2.22125170731216 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 655851.3264976246,
            "unit": "iter/sec",
            "range": "stddev: 4.845076352811359e-7",
            "extra": "mean: 1.5247358045918686 usec\nrounds: 19531"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 99.45533733662106,
            "unit": "iter/sec",
            "range": "stddev: 0.0007105021621186071",
            "extra": "mean: 10.05476454838572 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 78.89617442629941,
            "unit": "iter/sec",
            "range": "stddev: 0.0005910468664904209",
            "extra": "mean: 12.674885788462994 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1665447.0914984208,
            "unit": "iter/sec",
            "range": "stddev: 1.198169746735964e-7",
            "extra": "mean: 600.4393685663645 nsec\nrounds: 120482"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 98.87054267259505,
            "unit": "iter/sec",
            "range": "stddev: 0.000857698176829244",
            "extra": "mean: 10.114235979380137 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 266.36500888595486,
            "unit": "iter/sec",
            "range": "stddev: 0.00035194765599770497",
            "extra": "mean: 3.754246866667662 msec\nrounds: 120"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 95.07966470427782,
            "unit": "iter/sec",
            "range": "stddev: 0.0008520647771215029",
            "extra": "mean: 10.5174960714287 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.13788400067539786,
            "unit": "iter/sec",
            "range": "stddev: 0.09014910556817046",
            "extra": "mean: 7.2524730578000005 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 86.78563845242584,
            "unit": "iter/sec",
            "range": "stddev: 0.0008025669780440816",
            "extra": "mean: 11.52264381333301 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 12108.628937580555,
            "unit": "iter/sec",
            "range": "stddev: 0.000004017075900889985",
            "extra": "mean: 82.58573329440976 usec\nrounds: 5118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7102.112647546081,
            "unit": "iter/sec",
            "range": "stddev: 0.000020888607392539538",
            "extra": "mean: 140.80317359448242 usec\nrounds: 1227"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 90.64201848989244,
            "unit": "iter/sec",
            "range": "stddev: 0.0008031795242716813",
            "extra": "mean: 11.032410979589017 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 88.38049425837534,
            "unit": "iter/sec",
            "range": "stddev: 0.0009824431749584947",
            "extra": "mean: 11.314713822221417 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 99.30625683848811,
            "unit": "iter/sec",
            "range": "stddev: 0.0008829303590261207",
            "extra": "mean: 10.069858957894285 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 256.42943509314546,
            "unit": "iter/sec",
            "range": "stddev: 0.0003594416420345763",
            "extra": "mean: 3.899708314050452 msec\nrounds: 242"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 45.02838646634865,
            "unit": "iter/sec",
            "range": "stddev: 0.0012182837960225273",
            "extra": "mean: 22.20821305127903 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 190.52179093615894,
            "unit": "iter/sec",
            "range": "stddev: 0.004336647388901035",
            "extra": "mean: 5.248743438146061 msec\nrounds: 194"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 4444.006385096546,
            "unit": "iter/sec",
            "range": "stddev: 0.00006283087657457166",
            "extra": "mean: 225.02217894051807 usec\nrounds: 1833"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1019.6034965893721,
            "unit": "iter/sec",
            "range": "stddev: 0.00003419723739072144",
            "extra": "mean: 980.7734117674696 usec\nrounds: 187"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 4581.133084036011,
            "unit": "iter/sec",
            "range": "stddev: 0.000060110400093772415",
            "extra": "mean: 218.2866076265553 usec\nrounds: 1993"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1655662.9161083612,
            "unit": "iter/sec",
            "range": "stddev: 3.2863869153375424e-7",
            "extra": "mean: 603.9876778484003 nsec\nrounds: 151516"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.7124941255162192,
            "unit": "iter/sec",
            "range": "stddev: 0.017235768719184818",
            "extra": "mean: 1.403520343799994 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 10252.724845006767,
            "unit": "iter/sec",
            "range": "stddev: 0.000017388698534788383",
            "extra": "mean: 97.535047035522 usec\nrounds: 3019"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9779981.158600282,
            "unit": "iter/sec",
            "range": "stddev: 1.1963308277609364e-8",
            "extra": "mean: 102.24968573899491 nsec\nrounds: 98040"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 136.73601053312223,
            "unit": "iter/sec",
            "range": "stddev: 0.00032124123434657545",
            "extra": "mean: 7.313362413464338 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 168.73704546643958,
            "unit": "iter/sec",
            "range": "stddev: 0.00012552825760581328",
            "extra": "mean: 5.926380880000011 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 94.80350772352772,
            "unit": "iter/sec",
            "range": "stddev: 0.00019791801545979642",
            "extra": "mean: 10.548132912088722 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 100.99839432322106,
            "unit": "iter/sec",
            "range": "stddev: 0.00020031062798311666",
            "extra": "mean: 9.901147505372617 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 49.11912517717702,
            "unit": "iter/sec",
            "range": "stddev: 0.0029551623215483473",
            "extra": "mean: 20.35866877500183 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.133772635869354,
            "unit": "iter/sec",
            "range": "stddev: 0.00043875221783850493",
            "extra": "mean: 76.13958515384394 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1568446.3261541412,
            "unit": "iter/sec",
            "range": "stddev: 3.261545337713038e-7",
            "extra": "mean: 637.5736187619618 nsec\nrounds: 114930"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.1927858094170274,
            "unit": "iter/sec",
            "range": "stddev: 0.00497900065932993",
            "extra": "mean: 456.0408936000272 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11024.334781578817,
            "unit": "iter/sec",
            "range": "stddev: 0.000003394411337058194",
            "extra": "mean: 90.70842094445068 usec\nrounds: 4402"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 99.95361308995822,
            "unit": "iter/sec",
            "range": "stddev: 0.0008373038887279357",
            "extra": "mean: 10.004640843748192 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.098092476038383,
            "unit": "iter/sec",
            "range": "stddev: 0.0016247888697618837",
            "extra": "mean: 109.91314966666879 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 247.46593930651636,
            "unit": "iter/sec",
            "range": "stddev: 0.0003594767871306514",
            "extra": "mean: 4.040960153152146 msec\nrounds: 222"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 266.23869655929144,
            "unit": "iter/sec",
            "range": "stddev: 0.0003039786461671811",
            "extra": "mean: 3.7560280039055094 msec\nrounds: 256"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 78.24748435876788,
            "unit": "iter/sec",
            "range": "stddev: 0.0008868099727098718",
            "extra": "mean: 12.779963575761231 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 91.77628128276723,
            "unit": "iter/sec",
            "range": "stddev: 0.0009204187964355995",
            "extra": "mean: 10.896061444448277 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 144750.9623870661,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011440911047275938",
            "extra": "mean: 6.908416935605485 usec\nrounds: 35334"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7168433897903729,
            "unit": "iter/sec",
            "range": "stddev: 0.004770921653355347",
            "extra": "mean: 1.3950048423999988 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 240.56960457310524,
            "unit": "iter/sec",
            "range": "stddev: 0.00006012367802426691",
            "extra": "mean: 4.156801112819371 msec\nrounds: 195"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.7099382474882762,
            "unit": "iter/sec",
            "range": "stddev: 0.017555634611039303",
            "extra": "mean: 1.408573215399997 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.4708700206792233,
            "unit": "iter/sec",
            "range": "stddev: 0.0030153803303675088",
            "extra": "mean: 679.8697273999892 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 29.261447539381845,
            "unit": "iter/sec",
            "range": "stddev: 0.038297286379635864",
            "extra": "mean: 34.17465929032181 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 571.8215647122219,
            "unit": "iter/sec",
            "range": "stddev: 0.00005602712515044212",
            "extra": "mean: 1.748797285221773 msec\nrounds: 291"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 303.16714945797094,
            "unit": "iter/sec",
            "range": "stddev: 0.0000798854440211444",
            "extra": "mean: 3.2985104150891305 msec\nrounds: 159"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 91.3243223976549,
            "unit": "iter/sec",
            "range": "stddev: 0.0008443566731061327",
            "extra": "mean: 10.949985433734561 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 4354.258327844477,
            "unit": "iter/sec",
            "range": "stddev: 0.00008933755316361035",
            "extra": "mean: 229.6602371074841 usec\nrounds: 1784"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 4723.434688943642,
            "unit": "iter/sec",
            "range": "stddev: 0.00006227565987759534",
            "extra": "mean: 211.7103476291829 usec\nrounds: 2868"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.724117776579574,
            "unit": "iter/sec",
            "range": "stddev: 0.0007947411516783471",
            "extra": "mean: 211.67973520000487 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 83.85919302709894,
            "unit": "iter/sec",
            "range": "stddev: 0.00029274209642524433",
            "extra": "mean: 11.92475104878307 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 114.54377731027729,
            "unit": "iter/sec",
            "range": "stddev: 0.0005122611942095812",
            "extra": "mean: 8.730286563635755 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 84.8067816703965,
            "unit": "iter/sec",
            "range": "stddev: 0.0009762023107117544",
            "extra": "mean: 11.791509833335297 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 4675.993359706448,
            "unit": "iter/sec",
            "range": "stddev: 0.00007044135382265889",
            "extra": "mean: 213.85830198500932 usec\nrounds: 2871"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1639988.038535178,
            "unit": "iter/sec",
            "range": "stddev: 1.612670507699639e-7",
            "extra": "mean: 609.7605448959192 nsec\nrounds: 147038"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 60235.49731100673,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013496757686205774",
            "extra": "mean: 16.601506497685573 usec\nrounds: 10235"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 83.7172267986104,
            "unit": "iter/sec",
            "range": "stddev: 0.0011120832272495306",
            "extra": "mean: 11.944972835824977 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 29.14718819017451,
            "unit": "iter/sec",
            "range": "stddev: 0.04263214521201888",
            "extra": "mean: 34.30862673529171 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1492.267547328238,
            "unit": "iter/sec",
            "range": "stddev: 0.00005315453439025644",
            "extra": "mean: 670.1211198959625 usec\nrounds: 1151"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 4611.791852162311,
            "unit": "iter/sec",
            "range": "stddev: 0.00006116565783863934",
            "extra": "mean: 216.8354583329979 usec\nrounds: 1920"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 267.28990603616245,
            "unit": "iter/sec",
            "range": "stddev: 0.0002814858678230925",
            "extra": "mean: 3.741256132076709 msec\nrounds: 265"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 645.723608728917,
            "unit": "iter/sec",
            "range": "stddev: 0.00003167537243631342",
            "extra": "mean: 1.5486502065000578 msec\nrounds: 523"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4691.0881871416805,
            "unit": "iter/sec",
            "range": "stddev: 0.00002791749694239386",
            "extra": "mean: 213.17015585872164 usec\nrounds: 1912"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 252.9637310784605,
            "unit": "iter/sec",
            "range": "stddev: 0.00038885040072894264",
            "extra": "mean: 3.9531358734182924 msec\nrounds: 237"
          }
        ]
      }
    ]
  }
}