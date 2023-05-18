window.BENCHMARK_DATA = {
  "lastUpdate": 1684422683318,
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
          "id": "e8f45f560491b58dc3559996fcffea88657a019f",
          "message": "refactor(formats): introduce a standalone subpackage to deal with common in-memory formats",
          "timestamp": "2023-05-18T17:02:42+02:00",
          "tree_id": "3d53db398fbeb27c11ff997c7fb8922dda41dc7b",
          "url": "https://github.com/ibis-project/ibis/commit/e8f45f560491b58dc3559996fcffea88657a019f"
        },
        "date": 1684422601324,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 105.52124028086291,
            "unit": "iter/sec",
            "range": "stddev: 0.006964503102214898",
            "extra": "mean: 9.476765031744586 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 106.89176304685496,
            "unit": "iter/sec",
            "range": "stddev: 0.0004499080093898799",
            "extra": "mean: 9.355257800001482 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 96.20699754096648,
            "unit": "iter/sec",
            "range": "stddev: 0.01011985269597295",
            "extra": "mean: 10.394254322032905 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 6168223.527545461,
            "unit": "iter/sec",
            "range": "stddev: 4.092187874625697e-8",
            "extra": "mean: 162.12123239930634 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 27.85051784132436,
            "unit": "iter/sec",
            "range": "stddev: 0.0019043936268140144",
            "extra": "mean: 35.90597509523534 msec\nrounds: 21"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 102.30555339309338,
            "unit": "iter/sec",
            "range": "stddev: 0.009973811323831504",
            "extra": "mean: 9.774640445545058 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2334.87531000612,
            "unit": "iter/sec",
            "range": "stddev: 0.00009667846349890336",
            "extra": "mean: 428.28839540788107 usec\nrounds: 392"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.82642373830493,
            "unit": "iter/sec",
            "range": "stddev: 0.003422147791844438",
            "extra": "mean: 353.80399140000236 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-oracle]",
            "value": 264.61439470560475,
            "unit": "iter/sec",
            "range": "stddev: 0.000359194225682049",
            "extra": "mean: 3.779083904760904 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 315.22474622861716,
            "unit": "iter/sec",
            "range": "stddev: 0.00034658660847415525",
            "extra": "mean: 3.1723397733334955 msec\nrounds: 300"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 49.02712006099015,
            "unit": "iter/sec",
            "range": "stddev: 0.0005306098547556023",
            "extra": "mean: 20.396874194445676 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1949.413450581456,
            "unit": "iter/sec",
            "range": "stddev: 0.002372635550009987",
            "extra": "mean: 512.9748128606212 usec\nrounds: 1213"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 111.00407533984811,
            "unit": "iter/sec",
            "range": "stddev: 0.0008421890133690228",
            "extra": "mean: 9.008678257428095 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 119.06245507989698,
            "unit": "iter/sec",
            "range": "stddev: 0.00020750167428958374",
            "extra": "mean: 8.398953300005019 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.8515549502152377,
            "unit": "iter/sec",
            "range": "stddev: 0.006731742954210273",
            "extra": "mean: 540.0865904000057 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 106.34367766115206,
            "unit": "iter/sec",
            "range": "stddev: 0.000852387989535285",
            "extra": "mean: 9.40347392523275 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 282.8464180279664,
            "unit": "iter/sec",
            "range": "stddev: 0.0004658937306883679",
            "extra": "mean: 3.5354875871227227 msec\nrounds: 264"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 1.033677394115057,
            "unit": "iter/sec",
            "range": "stddev: 0.0027480912602257375",
            "extra": "mean: 967.4198213999944 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 825.1848399101721,
            "unit": "iter/sec",
            "range": "stddev: 0.00016111724595155053",
            "extra": "mean: 1.2118496991641994 msec\nrounds: 718"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 303.0059602540489,
            "unit": "iter/sec",
            "range": "stddev: 0.0003952512787820365",
            "extra": "mean: 3.300265114130333 msec\nrounds: 184"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 13714.464711107692,
            "unit": "iter/sec",
            "range": "stddev: 0.000018338679472139713",
            "extra": "mean: 72.91571498157523 usec\nrounds: 4719"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 110.41568283909842,
            "unit": "iter/sec",
            "range": "stddev: 0.0008615340241385705",
            "extra": "mean: 9.056684469879473 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 226.6849740012412,
            "unit": "iter/sec",
            "range": "stddev: 0.00033573784728049735",
            "extra": "mean: 4.411408406780966 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-oracle]",
            "value": 109.64735126273266,
            "unit": "iter/sec",
            "range": "stddev: 0.0007163198464409027",
            "extra": "mean: 9.12014734951362 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 125.64123100902039,
            "unit": "iter/sec",
            "range": "stddev: 0.00031164825450140924",
            "extra": "mean: 7.959170663714725 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 30.12281576544716,
            "unit": "iter/sec",
            "range": "stddev: 0.02395977181421184",
            "extra": "mean: 33.19742775000023 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 739.2179847016553,
            "unit": "iter/sec",
            "range": "stddev: 0.00015963561747969464",
            "extra": "mean: 1.3527809397164425 msec\nrounds: 564"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8806.275939400413,
            "unit": "iter/sec",
            "range": "stddev: 0.000024138750269666413",
            "extra": "mean: 113.55537878683442 usec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[oracle]",
            "value": 112.57603781908851,
            "unit": "iter/sec",
            "range": "stddev: 0.0007774145723985303",
            "extra": "mean: 8.882885020407416 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 57.912367343815504,
            "unit": "iter/sec",
            "range": "stddev: 0.0007609133977978861",
            "extra": "mean: 17.267468864865712 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 93.81707765838676,
            "unit": "iter/sec",
            "range": "stddev: 0.014138506712192836",
            "extra": "mean: 10.65904017647266 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 116.96985749094094,
            "unit": "iter/sec",
            "range": "stddev: 0.0007040033406722813",
            "extra": "mean: 8.54921106557258 msec\nrounds: 122"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1917.0491063180639,
            "unit": "iter/sec",
            "range": "stddev: 0.00007180432978071755",
            "extra": "mean: 521.6350466476192 usec\nrounds: 343"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 15760.196485163042,
            "unit": "iter/sec",
            "range": "stddev: 0.000010333263180784885",
            "extra": "mean: 63.45098558520001 usec\nrounds: 2775"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 44.05426342045827,
            "unit": "iter/sec",
            "range": "stddev: 0.02217651327814017",
            "extra": "mean: 22.6992786249971 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 183.62564759843218,
            "unit": "iter/sec",
            "range": "stddev: 0.00034121180738717595",
            "extra": "mean: 5.445862345911956 msec\nrounds: 159"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 341.212679720801,
            "unit": "iter/sec",
            "range": "stddev: 0.00023893030454696592",
            "extra": "mean: 2.9307234444460124 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 110.18284660651817,
            "unit": "iter/sec",
            "range": "stddev: 0.0007198058510007999",
            "extra": "mean: 9.075822878048989 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 4880630.962967274,
            "unit": "iter/sec",
            "range": "stddev: 5.183954404650649e-8",
            "extra": "mean: 204.8915411937027 nsec\nrounds: 169492"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 585.5349330540272,
            "unit": "iter/sec",
            "range": "stddev: 0.00025832138997441826",
            "extra": "mean: 1.707840034042393 msec\nrounds: 470"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 213.9496273276722,
            "unit": "iter/sec",
            "range": "stddev: 0.00031549243168964915",
            "extra": "mean: 4.6739973913039865 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 197.52549351410275,
            "unit": "iter/sec",
            "range": "stddev: 0.0002976528726440087",
            "extra": "mean: 5.062637648484614 msec\nrounds: 165"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2451.0444581409242,
            "unit": "iter/sec",
            "range": "stddev: 0.00009767171536766832",
            "extra": "mean: 407.98933559878515 usec\nrounds: 1177"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 473.44938546631874,
            "unit": "iter/sec",
            "range": "stddev: 0.00020552866917836668",
            "extra": "mean: 2.1121581962030875 msec\nrounds: 474"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 118.31400741071474,
            "unit": "iter/sec",
            "range": "stddev: 0.0007642700720636337",
            "extra": "mean: 8.452084599996722 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 174.06752435179382,
            "unit": "iter/sec",
            "range": "stddev: 0.00035551952803112506",
            "extra": "mean: 5.744897008927298 msec\nrounds: 112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 9.669564010024288,
            "unit": "iter/sec",
            "range": "stddev: 0.0015183677556058054",
            "extra": "mean: 103.41727910000031 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 54.44011164476551,
            "unit": "iter/sec",
            "range": "stddev: 0.0006708449861780382",
            "extra": "mean: 18.368808765956146 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2218207.3528899727,
            "unit": "iter/sec",
            "range": "stddev: 2.6914565259571007e-7",
            "extra": "mean: 450.8144825582507 nsec\nrounds: 175439"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.843532725961512,
            "unit": "iter/sec",
            "range": "stddev: 0.035553042192061624",
            "extra": "mean: 1.1854904608000083 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 311.1236806656349,
            "unit": "iter/sec",
            "range": "stddev: 0.0003400905465230902",
            "extra": "mean: 3.2141558555123337 msec\nrounds: 263"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 226.69272594750154,
            "unit": "iter/sec",
            "range": "stddev: 0.0033553260755146107",
            "extra": "mean: 4.411257555002379 msec\nrounds: 200"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 72.35933282385592,
            "unit": "iter/sec",
            "range": "stddev: 0.0006230845604546845",
            "extra": "mean: 13.819917362067125 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 190047.38207462998,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012645827166395108",
            "extra": "mean: 5.261845699128381 usec\nrounds: 42469"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 6240732.89830267,
            "unit": "iter/sec",
            "range": "stddev: 2.9607678097257378e-8",
            "extra": "mean: 160.2375900869851 nsec\nrounds: 68961"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 92.83223930861942,
            "unit": "iter/sec",
            "range": "stddev: 0.0007850242094573798",
            "extra": "mean: 10.772119766232448 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.18530940364459383,
            "unit": "iter/sec",
            "range": "stddev: 0.08729905792934116",
            "extra": "mean: 5.396380217799992 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.5367082739477964,
            "unit": "iter/sec",
            "range": "stddev: 0.0059313509300849086",
            "extra": "mean: 650.7415993999984 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2962398.3075788436,
            "unit": "iter/sec",
            "range": "stddev: 7.227173193572373e-8",
            "extra": "mean: 337.5643300367038 nsec\nrounds: 149232"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 39.96147549215279,
            "unit": "iter/sec",
            "range": "stddev: 0.0009901008109003684",
            "extra": "mean: 25.02410102941192 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 115.41150540483243,
            "unit": "iter/sec",
            "range": "stddev: 0.00036650905229317077",
            "extra": "mean: 8.66464739795456 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 322.38125728448796,
            "unit": "iter/sec",
            "range": "stddev: 0.00031591950528133463",
            "extra": "mean: 3.101917302585435 msec\nrounds: 271"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 112.56723515598058,
            "unit": "iter/sec",
            "range": "stddev: 0.0008237261508604549",
            "extra": "mean: 8.883579654544539 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 21.00598645406945,
            "unit": "iter/sec",
            "range": "stddev: 0.0025472923914560738",
            "extra": "mean: 47.605476761900505 msec\nrounds: 21"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 1.0120814238378768,
            "unit": "iter/sec",
            "range": "stddev: 0.018243015308340986",
            "extra": "mean: 988.0627946000004 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2401.828489898323,
            "unit": "iter/sec",
            "range": "stddev: 0.00009757636049993916",
            "extra": "mean: 416.34946217260216 usec\nrounds: 1335"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2344.9095071062025,
            "unit": "iter/sec",
            "range": "stddev: 0.00010041901715728936",
            "extra": "mean: 426.4556892150932 usec\nrounds: 2040"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2939701.345922715,
            "unit": "iter/sec",
            "range": "stddev: 7.521800318861334e-8",
            "extra": "mean: 340.17060997965115 nsec\nrounds: 147038"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2415.9989311115323,
            "unit": "iter/sec",
            "range": "stddev: 0.00009442119898750918",
            "extra": "mean: 413.9074678894533 usec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 274.40858864249253,
            "unit": "iter/sec",
            "range": "stddev: 0.008084712631791969",
            "extra": "mean: 3.6442008063487727 msec\nrounds: 315"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 317.2526818033851,
            "unit": "iter/sec",
            "range": "stddev: 0.0003385859593279295",
            "extra": "mean: 3.152061613208812 msec\nrounds: 318"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-oracle]",
            "value": 2367.6951607031397,
            "unit": "iter/sec",
            "range": "stddev: 0.00010240401100495863",
            "extra": "mean: 422.35166781479916 usec\nrounds: 1451"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 120.80691502363022,
            "unit": "iter/sec",
            "range": "stddev: 0.0006133136842517357",
            "extra": "mean: 8.277671851850506 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 101.11864034170425,
            "unit": "iter/sec",
            "range": "stddev: 0.0010346862976126326",
            "extra": "mean: 9.88937347872518 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7761199.531292196,
            "unit": "iter/sec",
            "range": "stddev: 2.4331638363434527e-8",
            "extra": "mean: 128.84606251494756 nsec\nrounds: 73519"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 110.90291011323177,
            "unit": "iter/sec",
            "range": "stddev: 0.0009022980027455994",
            "extra": "mean: 9.016895940593452 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11540.255572565477,
            "unit": "iter/sec",
            "range": "stddev: 0.000013889523718028572",
            "extra": "mean: 86.65319357201145 usec\nrounds: 5414"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1738848.603356597,
            "unit": "iter/sec",
            "range": "stddev: 3.0877691279362504e-7",
            "extra": "mean: 575.093195617861 nsec\nrounds: 131562"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2013.154828356122,
            "unit": "iter/sec",
            "range": "stddev: 0.003895988253298978",
            "extra": "mean: 496.7327827520192 usec\nrounds: 1809"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 142.08295231562627,
            "unit": "iter/sec",
            "range": "stddev: 0.0003460719993423368",
            "extra": "mean: 7.03814204098587 msec\nrounds: 122"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1286.5583219298726,
            "unit": "iter/sec",
            "range": "stddev: 0.00010652656813828527",
            "extra": "mean: 777.267522936677 usec\nrounds: 218"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 115.89737382337756,
            "unit": "iter/sec",
            "range": "stddev: 0.0007686187235616204",
            "extra": "mean: 8.628323205355416 msec\nrounds: 112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 165.30002426694327,
            "unit": "iter/sec",
            "range": "stddev: 0.0038736554734695706",
            "extra": "mean: 6.049605887444388 msec\nrounds: 231"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 312.37447585039956,
            "unit": "iter/sec",
            "range": "stddev: 0.00032443236567574526",
            "extra": "mean: 3.201285883802215 msec\nrounds: 284"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6905409.516454353,
            "unit": "iter/sec",
            "range": "stddev: 2.7113826259557045e-8",
            "extra": "mean: 144.8140038063258 nsec\nrounds: 66217"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 120.53545284816617,
            "unit": "iter/sec",
            "range": "stddev: 0.0007082382974365517",
            "extra": "mean: 8.296314290698033 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 90.80621934376568,
            "unit": "iter/sec",
            "range": "stddev: 0.01812081018692628",
            "extra": "mean: 11.01246156074722 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 62.9799311068308,
            "unit": "iter/sec",
            "range": "stddev: 0.0007146074057998342",
            "extra": "mean: 15.878073894741686 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11661204.444755437,
            "unit": "iter/sec",
            "range": "stddev: 1.7757497906436934e-8",
            "extra": "mean: 85.75443512186129 nsec\nrounds: 126567"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2301.4651683200436,
            "unit": "iter/sec",
            "range": "stddev: 0.0000987897598347138",
            "extra": "mean: 434.50581558440484 usec\nrounds: 1540"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 1135237.4514267666,
            "unit": "iter/sec",
            "range": "stddev: 4.0008854837792377e-7",
            "extra": "mean: 880.8729827783606 nsec\nrounds: 112347"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5101.401252599186,
            "unit": "iter/sec",
            "range": "stddev: 0.00003615895455295683",
            "extra": "mean: 196.02457256043047 usec\nrounds: 2398"
          }
        ]
      }
    ]
  }
}