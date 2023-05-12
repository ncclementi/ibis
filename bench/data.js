window.BENCHMARK_DATA = {
  "lastUpdate": 1683857294952,
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
          "id": "22e6df33559b386c727d2ecaacc1dafad565ad45",
          "message": "chore: revert impala docker-compose.yml",
          "timestamp": "2023-05-11T22:02:55-04:00",
          "tree_id": "e13a873ea2b6b87fb0da6a5d50983ccfe4b574d8",
          "url": "https://github.com/ibis-project/ibis/commit/22e6df33559b386c727d2ecaacc1dafad565ad45"
        },
        "date": 1683857213763,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 275.1624125503336,
            "unit": "iter/sec",
            "range": "stddev: 0.0002992269790153827",
            "extra": "mean: 3.6342172999994204 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 106.21366378561201,
            "unit": "iter/sec",
            "range": "stddev: 0.0005971399006755978",
            "extra": "mean: 9.414984516666891 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 111.1027283944277,
            "unit": "iter/sec",
            "range": "stddev: 0.0000598401973175437",
            "extra": "mean: 9.000679051282008 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 97.043648413797,
            "unit": "iter/sec",
            "range": "stddev: 0.0008010660885715247",
            "extra": "mean: 10.304641430379558 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 166.37484012246878,
            "unit": "iter/sec",
            "range": "stddev: 0.00005171993599847531",
            "extra": "mean: 6.010524183006868 msec\nrounds: 153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 747.2845992554406,
            "unit": "iter/sec",
            "range": "stddev: 0.000011420427500023878",
            "extra": "mean: 1.3381782536350315 msec\nrounds: 619"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 53.38094205466222,
            "unit": "iter/sec",
            "range": "stddev: 0.0002568656986415357",
            "extra": "mean: 18.733277486485672 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 24.97550776830943,
            "unit": "iter/sec",
            "range": "stddev: 0.0004097155700900697",
            "extra": "mean: 40.03922599999612 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[oracle]",
            "value": 86.84837643919862,
            "unit": "iter/sec",
            "range": "stddev: 0.014195382930275918",
            "extra": "mean: 11.51432002531546 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-oracle]",
            "value": 2241.071824289349,
            "unit": "iter/sec",
            "range": "stddev: 0.0000842978846787441",
            "extra": "mean: 446.2150606516608 usec\nrounds: 1995"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 8.526545411921942,
            "unit": "iter/sec",
            "range": "stddev: 0.00008882692554523947",
            "extra": "mean: 117.2807921250012 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 149889.29072032,
            "unit": "iter/sec",
            "range": "stddev: 3.4448130689490306e-7",
            "extra": "mean: 6.671590713347965 usec\nrounds: 38313"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 101.57976255439564,
            "unit": "iter/sec",
            "range": "stddev: 0.0002052008050882809",
            "extra": "mean: 9.844480582089401 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 85.91865516161225,
            "unit": "iter/sec",
            "range": "stddev: 0.0004991622523496632",
            "extra": "mean: 11.638915880596695 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 6265732.905510842,
            "unit": "iter/sec",
            "range": "stddev: 7.540485657946299e-9",
            "extra": "mean: 159.59824893277087 nsec\nrounds: 45046"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 37.05727804671164,
            "unit": "iter/sec",
            "range": "stddev: 0.0007601398589190514",
            "extra": "mean: 26.985252363637574 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2056.398107557376,
            "unit": "iter/sec",
            "range": "stddev: 0.0001815711188021377",
            "extra": "mean: 486.28716216229975 usec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 220.40197217907996,
            "unit": "iter/sec",
            "range": "stddev: 0.009833290323297498",
            "extra": "mean: 4.537164482300933 msec\nrounds: 226"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 163.4595710558913,
            "unit": "iter/sec",
            "range": "stddev: 0.00006130652177609333",
            "extra": "mean: 6.11772069105744 msec\nrounds: 123"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 234.61135745524496,
            "unit": "iter/sec",
            "range": "stddev: 0.004176757440638876",
            "extra": "mean: 4.262368245283106 msec\nrounds: 212"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1954165.47440771,
            "unit": "iter/sec",
            "range": "stddev: 1.5330400206297183e-7",
            "extra": "mean: 511.7273911018672 nsec\nrounds: 95239"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 271.9619054268834,
            "unit": "iter/sec",
            "range": "stddev: 0.00034458251916610856",
            "extra": "mean: 3.676985563218334 msec\nrounds: 174"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1772.6572356421952,
            "unit": "iter/sec",
            "range": "stddev: 0.000011988824976388251",
            "extra": "mean: 564.1248516032044 usec\nrounds: 1341"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-oracle]",
            "value": 99.82976545347734,
            "unit": "iter/sec",
            "range": "stddev: 0.0006671458122708974",
            "extra": "mean: 10.017052483870856 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 41.25948303429461,
            "unit": "iter/sec",
            "range": "stddev: 0.02475291212829745",
            "extra": "mean: 24.236852390244604 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 283.05120296407335,
            "unit": "iter/sec",
            "range": "stddev: 0.00027666472980398074",
            "extra": "mean: 3.532929694444458 msec\nrounds: 144"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 285.7630802973657,
            "unit": "iter/sec",
            "range": "stddev: 0.00024213375298961923",
            "extra": "mean: 3.499402368421413 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 1053764.1324138422,
            "unit": "iter/sec",
            "range": "stddev: 1.0199947344126251e-7",
            "extra": "mean: 948.9789690500421 nsec\nrounds: 142837"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12171.192772838773,
            "unit": "iter/sec",
            "range": "stddev: 0.000041976138362486534",
            "extra": "mean: 82.16121613253875 usec\nrounds: 3558"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4529.861312920095,
            "unit": "iter/sec",
            "range": "stddev: 0.000049083735046851786",
            "extra": "mean: 220.75731041650096 usec\nrounds: 1920"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2730501.5269400086,
            "unit": "iter/sec",
            "range": "stddev: 1.4606797976701263e-8",
            "extra": "mean: 366.23308580228286 nsec\nrounds: 126583"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-oracle]",
            "value": 234.32474150690933,
            "unit": "iter/sec",
            "range": "stddev: 0.00028733729662541",
            "extra": "mean: 4.2675817908477836 msec\nrounds: 153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 274.0745628479699,
            "unit": "iter/sec",
            "range": "stddev: 0.0002791781148166233",
            "extra": "mean: 3.648642141790822 msec\nrounds: 268"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2037.3897080017027,
            "unit": "iter/sec",
            "range": "stddev: 0.000112271976395196",
            "extra": "mean: 490.8241148330982 usec\nrounds: 209"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 101.96151042281085,
            "unit": "iter/sec",
            "range": "stddev: 0.0006715921263295977",
            "extra": "mean: 9.80762246315527 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 415.44727902546236,
            "unit": "iter/sec",
            "range": "stddev: 0.00002796898239766249",
            "extra": "mean: 2.4070442881362837 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 101.88349315565314,
            "unit": "iter/sec",
            "range": "stddev: 0.0007344817246822072",
            "extra": "mean: 9.81513264835005 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 96.62602280228386,
            "unit": "iter/sec",
            "range": "stddev: 0.000809957846351117",
            "extra": "mean: 10.349178937502165 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5566107.879133348,
            "unit": "iter/sec",
            "range": "stddev: 8.610713606024785e-9",
            "extra": "mean: 179.65875288690353 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1701.4520972837913,
            "unit": "iter/sec",
            "range": "stddev: 0.005420396041907577",
            "extra": "mean: 587.7332671289461 usec\nrounds: 1299"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9353614577275174,
            "unit": "iter/sec",
            "range": "stddev: 0.005972119361665244",
            "extra": "mean: 1.0691054156000006 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 162.07148121399717,
            "unit": "iter/sec",
            "range": "stddev: 0.004097448550974763",
            "extra": "mean: 6.170116991030719 msec\nrounds: 223"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1966765.1757463997,
            "unit": "iter/sec",
            "range": "stddev: 1.0451282316255586e-7",
            "extra": "mean: 508.44910837944525 nsec\nrounds: 91744"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 30.182044564791287,
            "unit": "iter/sec",
            "range": "stddev: 0.00011380921553668352",
            "extra": "mean: 33.13228160714284 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7430.882631997337,
            "unit": "iter/sec",
            "range": "stddev: 0.0001068521020751801",
            "extra": "mean: 134.57351562706776 usec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9268127233383028,
            "unit": "iter/sec",
            "range": "stddev: 0.007034736991689954",
            "extra": "mean: 1.0789666291999993 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 103.92601334694314,
            "unit": "iter/sec",
            "range": "stddev: 0.0006187114419062592",
            "extra": "mean: 9.622229967213629 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2230.752970797416,
            "unit": "iter/sec",
            "range": "stddev: 0.00009212411323381115",
            "extra": "mean: 448.279129554419 usec\nrounds: 1235"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10425.311850665585,
            "unit": "iter/sec",
            "range": "stddev: 0.000003992157195354385",
            "extra": "mean: 95.9203920538988 usec\nrounds: 4581"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 84.7686980696841,
            "unit": "iter/sec",
            "range": "stddev: 0.018109468591121093",
            "extra": "mean: 11.796807344828512 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 675.682269161826,
            "unit": "iter/sec",
            "range": "stddev: 0.00005164493579374454",
            "extra": "mean: 1.479985557768869 msec\nrounds: 502"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 100.64550968612869,
            "unit": "iter/sec",
            "range": "stddev: 0.000859702888848565",
            "extra": "mean: 9.935863041665568 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 110.95551187279666,
            "unit": "iter/sec",
            "range": "stddev: 0.0002265244757520347",
            "extra": "mean: 9.012621212963582 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 104.10823959036288,
            "unit": "iter/sec",
            "range": "stddev: 0.00006935540020317544",
            "extra": "mean: 9.60538766129101 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 87.1176071479235,
            "unit": "iter/sec",
            "range": "stddev: 0.016347660973952335",
            "extra": "mean: 11.47873584615364 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11639871.413511952,
            "unit": "iter/sec",
            "range": "stddev: 1.8051784930131633e-8",
            "extra": "mean: 85.91160198204983 nsec\nrounds: 117648"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2222.9308528352967,
            "unit": "iter/sec",
            "range": "stddev: 0.0001123036706391778",
            "extra": "mean: 449.8565480453534 usec\nrounds: 1228"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7266680.985022084,
            "unit": "iter/sec",
            "range": "stddev: 4.247506904560448e-9",
            "extra": "mean: 137.61440774141337 nsec\nrounds: 60607"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 187.0669325117674,
            "unit": "iter/sec",
            "range": "stddev: 0.00014716017137035835",
            "extra": "mean: 5.345680214952449 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 97.06077756362438,
            "unit": "iter/sec",
            "range": "stddev: 0.0007227157625270841",
            "extra": "mean: 10.30282288171954 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 91.15102571633626,
            "unit": "iter/sec",
            "range": "stddev: 0.016968601638669274",
            "extra": "mean: 10.970803588234093 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2143.9910977673535,
            "unit": "iter/sec",
            "range": "stddev: 0.00009925444918052332",
            "extra": "mean: 466.41984709794303 usec\nrounds: 1792"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2192.716946448759,
            "unit": "iter/sec",
            "range": "stddev: 0.00008743517632322927",
            "extra": "mean: 456.0552157083303 usec\nrounds: 1757"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 283.5205013469754,
            "unit": "iter/sec",
            "range": "stddev: 0.00023782229598386375",
            "extra": "mean: 3.5270817991965577 msec\nrounds: 249"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6069876.667848775,
            "unit": "iter/sec",
            "range": "stddev: 8.917295660012122e-9",
            "extra": "mean: 164.7479931997907 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 176.01450081476537,
            "unit": "iter/sec",
            "range": "stddev: 0.00036657829286888745",
            "extra": "mean: 5.681350089742792 msec\nrounds: 156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2175.022288254267,
            "unit": "iter/sec",
            "range": "stddev: 0.00008475341579021055",
            "extra": "mean: 459.7654035088659 usec\nrounds: 1368"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 4536441.064193925,
            "unit": "iter/sec",
            "range": "stddev: 9.985831162123322e-9",
            "extra": "mean: 220.43711928522012 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 541.1577979506773,
            "unit": "iter/sec",
            "range": "stddev: 0.00013097090360603112",
            "extra": "mean: 1.8478898461537887 msec\nrounds: 429"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7709318444595511,
            "unit": "iter/sec",
            "range": "stddev: 0.0034384083322213975",
            "extra": "mean: 1.2971315262000018 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1161.9804128639048,
            "unit": "iter/sec",
            "range": "stddev: 0.00001471069457080525",
            "extra": "mean: 860.5997045469331 usec\nrounds: 132"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 85.82803176559932,
            "unit": "iter/sec",
            "range": "stddev: 0.017326544485731805",
            "extra": "mean: 11.651205083335133 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 64.70236749197606,
            "unit": "iter/sec",
            "range": "stddev: 0.000604407730186644",
            "extra": "mean: 15.455385000000396 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 100.22602388254248,
            "unit": "iter/sec",
            "range": "stddev: 0.0008643489701483135",
            "extra": "mean: 9.97744858333327 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 128.0621860140063,
            "unit": "iter/sec",
            "range": "stddev: 0.0000645654921723313",
            "extra": "mean: 7.808706310000275 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 104.44120611394311,
            "unit": "iter/sec",
            "range": "stddev: 0.00029400058430532677",
            "extra": "mean: 9.574764953489924 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 201.4395617282982,
            "unit": "iter/sec",
            "range": "stddev: 0.000023592619051802987",
            "extra": "mean: 4.964268147826893 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 104.25643720443043,
            "unit": "iter/sec",
            "range": "stddev: 0.0007164647523951882",
            "extra": "mean: 9.591733870966237 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6150752117737273,
            "unit": "iter/sec",
            "range": "stddev: 0.001105810904254206",
            "extra": "mean: 619.1662114000053 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 42.68186102395877,
            "unit": "iter/sec",
            "range": "stddev: 0.0008198597066661201",
            "extra": "mean: 23.429156461539165 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5386187568786465,
            "unit": "iter/sec",
            "range": "stddev: 0.0032374416140616992",
            "extra": "mean: 393.9149970000017 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.16962416291141783,
            "unit": "iter/sec",
            "range": "stddev: 0.005924724816139577",
            "extra": "mean: 5.895386499400007 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 14004.457821945602,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017611330054357988",
            "extra": "mean: 71.40583467879463 usec\nrounds: 5698"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 36.59048412448393,
            "unit": "iter/sec",
            "range": "stddev: 0.02961327460029009",
            "extra": "mean: 27.32950995121888 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 101.37198029514339,
            "unit": "iter/sec",
            "range": "stddev: 0.000773106477457671",
            "extra": "mean: 9.864658824741424 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 106.19790129441184,
            "unit": "iter/sec",
            "range": "stddev: 0.0006822801834088368",
            "extra": "mean: 9.416381941745776 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 276.01891013266226,
            "unit": "iter/sec",
            "range": "stddev: 0.0003269734956771221",
            "extra": "mean: 3.6229401801469785 msec\nrounds: 272"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 56.89246058568385,
            "unit": "iter/sec",
            "range": "stddev: 0.0006593997220373626",
            "extra": "mean: 17.577021448983267 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 2531501.8162263394,
            "unit": "iter/sec",
            "range": "stddev: 1.5287974427751433e-8",
            "extra": "mean: 395.02243039718223 nsec\nrounds: 125000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 321.44114069566183,
            "unit": "iter/sec",
            "range": "stddev: 0.0001609790459273058",
            "extra": "mean: 3.1109894577769457 msec\nrounds: 225"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 19.031037777662807,
            "unit": "iter/sec",
            "range": "stddev: 0.0012405096515140576",
            "extra": "mean: 52.54574194444217 msec\nrounds: 18"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.354666241979157,
            "unit": "iter/sec",
            "range": "stddev: 0.00043917560864307413",
            "extra": "mean: 738.1892078000021 msec\nrounds: 5"
          }
        ]
      }
    ]
  }
}