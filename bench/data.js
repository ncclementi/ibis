window.BENCHMARK_DATA = {
  "lastUpdate": 1683630078298,
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
          "id": "729b2d5e6734caedc9979c246069effb8893e287",
          "message": "chore(deps): lock file maintenance",
          "timestamp": "2023-05-09T03:47:48-07:00",
          "tree_id": "d3fb878ce14aca5c9bc51b014805d3fa9cd74c21",
          "url": "https://github.com/ibis-project/ibis/commit/729b2d5e6734caedc9979c246069effb8893e287"
        },
        "date": 1683629996727,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 696.705410746238,
            "unit": "iter/sec",
            "range": "stddev: 0.0000627837976388595",
            "extra": "mean: 1.4353268749971448 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 102.37314430246889,
            "unit": "iter/sec",
            "range": "stddev: 0.0006817374265098113",
            "extra": "mean: 9.76818683077104 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 550.8745581205253,
            "unit": "iter/sec",
            "range": "stddev: 0.00002052473279429343",
            "extra": "mean: 1.8152953068150428 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 102.25567116728791,
            "unit": "iter/sec",
            "range": "stddev: 0.0005898527883186792",
            "extra": "mean: 9.779408697675292 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2038.8525735412807,
            "unit": "iter/sec",
            "range": "stddev: 0.0001375608458346604",
            "extra": "mean: 490.4719512225943 usec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2150.0038362983028,
            "unit": "iter/sec",
            "range": "stddev: 0.00008861663782540652",
            "extra": "mean: 465.1154491527404 usec\nrounds: 1652"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 283.6068812353396,
            "unit": "iter/sec",
            "range": "stddev: 0.0002750607675115345",
            "extra": "mean: 3.5260075342466424 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 189.7399681592572,
            "unit": "iter/sec",
            "range": "stddev: 0.00006969115635007753",
            "extra": "mean: 5.270370864406679 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2655967.2289929176,
            "unit": "iter/sec",
            "range": "stddev: 1.9004383355907835e-8",
            "extra": "mean: 376.51066966647664 nsec\nrounds: 109891"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2626509.1834880086,
            "unit": "iter/sec",
            "range": "stddev: 1.9350997256868497e-8",
            "extra": "mean: 380.73348697440423 nsec\nrounds: 133316"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 279.918007018674,
            "unit": "iter/sec",
            "range": "stddev: 0.00034012498064896695",
            "extra": "mean: 3.5724747066139537 msec\nrounds: 242"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 87.08933696118326,
            "unit": "iter/sec",
            "range": "stddev: 0.013748884584997956",
            "extra": "mean: 11.482461974026876 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11433818.393662896,
            "unit": "iter/sec",
            "range": "stddev: 3.335339116564261e-9",
            "extra": "mean: 87.45984635848959 nsec\nrounds: 114943"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 84.41475019307711,
            "unit": "iter/sec",
            "range": "stddev: 0.013362508337025916",
            "extra": "mean: 11.846270914890539 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[oracle]",
            "value": 99.57463257048053,
            "unit": "iter/sec",
            "range": "stddev: 0.0009478034239825606",
            "extra": "mean: 10.042718453338844 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2140.3197128217416,
            "unit": "iter/sec",
            "range": "stddev: 0.00008658449233137655",
            "extra": "mean: 467.21991766436895 usec\nrounds: 1421"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6684491431858286,
            "unit": "iter/sec",
            "range": "stddev: 0.0032635530809192338",
            "extra": "mean: 599.3589939999879 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7882512498178347,
            "unit": "iter/sec",
            "range": "stddev: 0.00537778828579392",
            "extra": "mean: 1.2686310364000064 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 156.82956365269496,
            "unit": "iter/sec",
            "range": "stddev: 0.00016767180630214692",
            "extra": "mean: 6.3763487999911685 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 4492209.431533221,
            "unit": "iter/sec",
            "range": "stddev: 3.832531905619516e-8",
            "extra": "mean: 222.607608848276 nsec\nrounds: 147059"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 228.36598845602285,
            "unit": "iter/sec",
            "range": "stddev: 0.010803969953584994",
            "extra": "mean: 4.378935789698706 msec\nrounds: 233"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2099.4462560572583,
            "unit": "iter/sec",
            "range": "stddev: 0.00009604544503028905",
            "extra": "mean: 476.3160748291748 usec\nrounds: 1470"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2181.008702503175,
            "unit": "iter/sec",
            "range": "stddev: 0.00008871357731251174",
            "extra": "mean: 458.5034433160609 usec\nrounds: 1182"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 52.43670393820428,
            "unit": "iter/sec",
            "range": "stddev: 0.00035386891707682477",
            "extra": "mean: 19.07061132557992 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 1061367.5792396239,
            "unit": "iter/sec",
            "range": "stddev: 1.5453218934918726e-7",
            "extra": "mean: 942.1806540542832 nsec\nrounds: 123457"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1957519.706036164,
            "unit": "iter/sec",
            "range": "stddev: 9.081568284543004e-8",
            "extra": "mean: 510.85054056744485 nsec\nrounds: 136987"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1685385.9417854077,
            "unit": "iter/sec",
            "range": "stddev: 9.608502860855532e-8",
            "extra": "mean: 593.3359091275281 nsec\nrounds: 120482"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-oracle]",
            "value": 97.22779442417925,
            "unit": "iter/sec",
            "range": "stddev: 0.0009480142866865133",
            "extra": "mean: 10.285124803276556 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7116978.560870954,
            "unit": "iter/sec",
            "range": "stddev: 4.0808213908122986e-9",
            "extra": "mean: 140.50906454854575 nsec\nrounds: 61350"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1166.423011111796,
            "unit": "iter/sec",
            "range": "stddev: 0.000012560800239920671",
            "extra": "mean: 857.3219067813425 usec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 149447.64735575754,
            "unit": "iter/sec",
            "range": "stddev: 3.043803761052331e-7",
            "extra": "mean: 6.691306405242481 usec\nrounds: 42917"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 282.6187776700727,
            "unit": "iter/sec",
            "range": "stddev: 0.0003197684454145582",
            "extra": "mean: 3.538335308941833 msec\nrounds: 123"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5573118.781910032,
            "unit": "iter/sec",
            "range": "stddev: 8.379222259296081e-9",
            "extra": "mean: 179.43274477592647 nsec\nrounds: 196040"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 125.36727939826737,
            "unit": "iter/sec",
            "range": "stddev: 0.00030970457365556674",
            "extra": "mean: 7.976562981981887 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 165.3738692470425,
            "unit": "iter/sec",
            "range": "stddev: 0.00012399735156593176",
            "extra": "mean: 6.046904535481102 msec\nrounds: 155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 112.13688579958071,
            "unit": "iter/sec",
            "range": "stddev: 0.00007290677186098795",
            "extra": "mean: 8.917672297296303 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 422.86945049853904,
            "unit": "iter/sec",
            "range": "stddev: 0.00003060217811216866",
            "extra": "mean: 2.3647960353273496 msec\nrounds: 368"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 47.42747831752839,
            "unit": "iter/sec",
            "range": "stddev: 0.00021513006641120356",
            "extra": "mean: 21.084823302326342 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8853353893550228,
            "unit": "iter/sec",
            "range": "stddev: 0.008071635458265562",
            "extra": "mean: 1.1295154492000052 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8037.964953573198,
            "unit": "iter/sec",
            "range": "stddev: 0.000013638555425530525",
            "extra": "mean: 124.4095994167603 usec\nrounds: 3767"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 35.42748449257976,
            "unit": "iter/sec",
            "range": "stddev: 0.03129646176683311",
            "extra": "mean: 28.22667243590069 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2091.7225893448185,
            "unit": "iter/sec",
            "range": "stddev: 0.00009182672292798792",
            "extra": "mean: 478.0748676205796 usec\nrounds: 1118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4351.3559363687245,
            "unit": "iter/sec",
            "range": "stddev: 0.000026014496705479466",
            "extra": "mean: 229.81342244195173 usec\nrounds: 2121"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6151040.115658388,
            "unit": "iter/sec",
            "range": "stddev: 8.359222910368703e-9",
            "extra": "mean: 162.57413074791194 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 175.02905233323793,
            "unit": "iter/sec",
            "range": "stddev: 0.00021599740352475926",
            "extra": "mean: 5.713337224131793 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 104.3320686422557,
            "unit": "iter/sec",
            "range": "stddev: 0.0008555128404075821",
            "extra": "mean: 9.584780719999912 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 51.15321800948517,
            "unit": "iter/sec",
            "range": "stddev: 0.0005056794475434986",
            "extra": "mean: 19.549112234045047 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 19.254697469140297,
            "unit": "iter/sec",
            "range": "stddev: 0.00009322613840538411",
            "extra": "mean: 51.93537844999696 msec\nrounds: 20"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 100.59897403758207,
            "unit": "iter/sec",
            "range": "stddev: 0.0008530010771969873",
            "extra": "mean: 9.940459229995895 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 99.97942756647313,
            "unit": "iter/sec",
            "range": "stddev: 0.000290313527537833",
            "extra": "mean: 10.002057666664795 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 110.97836956843685,
            "unit": "iter/sec",
            "range": "stddev: 0.00003123693202073498",
            "extra": "mean: 9.010764925532014 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 23.98614268726817,
            "unit": "iter/sec",
            "range": "stddev: 0.0006419632048746732",
            "extra": "mean: 41.69073840000124 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 30.391472130959436,
            "unit": "iter/sec",
            "range": "stddev: 0.00008966561487440568",
            "extra": "mean: 32.90396712903261 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 102.95546225256693,
            "unit": "iter/sec",
            "range": "stddev: 0.0008236179054693314",
            "extra": "mean: 9.712937790001206 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 79.31967049595528,
            "unit": "iter/sec",
            "range": "stddev: 0.018550206739699808",
            "extra": "mean: 12.607213239129537 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 35.98250247976607,
            "unit": "iter/sec",
            "range": "stddev: 0.0009048060467235354",
            "extra": "mean: 27.79128551612904 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 94.2044954119035,
            "unit": "iter/sec",
            "range": "stddev: 0.000962478737852198",
            "extra": "mean: 10.615204673912428 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13292.352330714393,
            "unit": "iter/sec",
            "range": "stddev: 0.000001378355305666385",
            "extra": "mean: 75.23122883895564 usec\nrounds: 6734"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.3340322716163087,
            "unit": "iter/sec",
            "range": "stddev: 0.010998763684373037",
            "extra": "mean: 749.6070531999976 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 8.537732717972895,
            "unit": "iter/sec",
            "range": "stddev: 0.00035812564978730425",
            "extra": "mean: 117.12711477777778 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 105.13445980795552,
            "unit": "iter/sec",
            "range": "stddev: 0.00006105403235566135",
            "extra": "mean: 9.511629220587198 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 269.83403632377804,
            "unit": "iter/sec",
            "range": "stddev: 0.0003445428851268365",
            "extra": "mean: 3.705981697579784 msec\nrounds: 248"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 37.63413172334368,
            "unit": "iter/sec",
            "range": "stddev: 0.000958388020367878",
            "extra": "mean: 26.571624060605615 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 6243787.124223794,
            "unit": "iter/sec",
            "range": "stddev: 5.120704832543733e-9",
            "extra": "mean: 160.15920788207373 nsec\nrounds: 62112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 279.6284764232048,
            "unit": "iter/sec",
            "range": "stddev: 0.000353827392365849",
            "extra": "mean: 3.576173688714543 msec\nrounds: 257"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1738.8743946478262,
            "unit": "iter/sec",
            "range": "stddev: 0.000010060602365863664",
            "extra": "mean: 575.0846657343125 usec\nrounds: 1430"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-oracle]",
            "value": 234.84277442150312,
            "unit": "iter/sec",
            "range": "stddev: 0.0003399128544323931",
            "extra": "mean: 4.258168055045921 msec\nrounds: 218"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 102.56225453089858,
            "unit": "iter/sec",
            "range": "stddev: 0.0007526053547377278",
            "extra": "mean: 9.750175681821943 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 312.48675407729746,
            "unit": "iter/sec",
            "range": "stddev: 0.00016247123466139497",
            "extra": "mean: 3.20013564399801 msec\nrounds: 250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.167315076536066,
            "unit": "iter/sec",
            "range": "stddev: 0.055914374244623526",
            "extra": "mean: 5.9767477068000066 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 99.98356627252416,
            "unit": "iter/sec",
            "range": "stddev: 0.0008902570444902393",
            "extra": "mean: 10.001643642859372 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 100.63841184220195,
            "unit": "iter/sec",
            "range": "stddev: 0.0008384755605047328",
            "extra": "mean: 9.936563799992895 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 219.59701588489963,
            "unit": "iter/sec",
            "range": "stddev: 0.0038563510744548317",
            "extra": "mean: 4.55379594285627 msec\nrounds: 175"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 91.9933739758357,
            "unit": "iter/sec",
            "range": "stddev: 0.0003336816285926597",
            "extra": "mean: 10.870348121623133 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 57.32297394172896,
            "unit": "iter/sec",
            "range": "stddev: 0.0011922775484665136",
            "extra": "mean: 17.445012553196193 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 274.85652486183204,
            "unit": "iter/sec",
            "range": "stddev: 0.0002526651167849787",
            "extra": "mean: 3.6382618186076945 msec\nrounds: 215"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-oracle]",
            "value": 2151.232350106944,
            "unit": "iter/sec",
            "range": "stddev: 0.00009124525573797124",
            "extra": "mean: 464.8498336082976 usec\nrounds: 1821"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 157.3573314764879,
            "unit": "iter/sec",
            "range": "stddev: 0.004039060689397365",
            "extra": "mean: 6.354962877274126 msec\nrounds: 220"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10357.460711009144,
            "unit": "iter/sec",
            "range": "stddev: 0.000002577594337325418",
            "extra": "mean: 96.54876112028894 usec\nrounds: 4429"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 67.37826355589344,
            "unit": "iter/sec",
            "range": "stddev: 0.025655996988640007",
            "extra": "mean: 14.841581649999824 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 200.46118943524317,
            "unit": "iter/sec",
            "range": "stddev: 0.000028558425939669518",
            "extra": "mean: 4.988496789913737 msec\nrounds: 119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.4437616030381455,
            "unit": "iter/sec",
            "range": "stddev: 0.0038158868645586314",
            "extra": "mean: 409.2052181999975 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 681.4497351600133,
            "unit": "iter/sec",
            "range": "stddev: 0.000025330574659974066",
            "extra": "mean: 1.467459664893973 msec\nrounds: 564"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2089.561917098852,
            "unit": "iter/sec",
            "range": "stddev: 0.00008703180557032566",
            "extra": "mean: 478.5692119563512 usec\nrounds: 1288"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 105.1487198143041,
            "unit": "iter/sec",
            "range": "stddev: 0.0008176887642621997",
            "extra": "mean: 9.510339277225924 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2168.200751433305,
            "unit": "iter/sec",
            "range": "stddev: 0.00011215048226944174",
            "extra": "mean: 461.2119054653693 usec\nrounds: 1354"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 103.08344157512695,
            "unit": "iter/sec",
            "range": "stddev: 0.0008412261760221477",
            "extra": "mean: 9.700879061854009 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11865.085028946718,
            "unit": "iter/sec",
            "range": "stddev: 0.000019921374129080368",
            "extra": "mean: 84.28089622285425 usec\nrounds: 5666"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 101.04335929327908,
            "unit": "iter/sec",
            "range": "stddev: 0.0008180535538306824",
            "extra": "mean: 9.896741428573181 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8929278847499049,
            "unit": "iter/sec",
            "range": "stddev: 0.007904256130014005",
            "extra": "mean: 1.1199112684000057 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 101.21789613662374,
            "unit": "iter/sec",
            "range": "stddev: 0.0008425210283548582",
            "extra": "mean: 9.879675809999071 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 206.8978224574046,
            "unit": "iter/sec",
            "range": "stddev: 0.01450957257675862",
            "extra": "mean: 4.833303647774622 msec\nrounds: 247"
          }
        ]
      }
    ]
  }
}