window.BENCHMARK_DATA = {
  "lastUpdate": 1677019533047,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "gil@forsyth.dev",
            "name": "Gil Forsyth",
            "username": "gforsyth"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "62c8deabce1f64e6a828edabd925b9f0356b0424",
          "message": "fix(sqlalchemy): reflect most recent schema when view is replaced\n\nThis may be too coarse of a method for this.\n\nThis is a fix for creating a table or view with the same name as an\nexisting table or view.  This is most likely to occur when using the\nvarious `parquet` and `csv` registration features, because we do a lot\nof `CREATE OR REPLACE VIEW`.\n\nBefore this, the ibis table would reflect the schema of the initial\nregistration, but would not update if you try to re-use the same view\nname for a different file (with a different schema).\n\nOther fixes I tried:\n`sa.table(..., extend_existing=True)`\nThis works if the subsequently registered schema is a superset of the\nexisting schema, but if it's a subset, then you end up with a union of\nthe two registration runs.\n\nCalling `reflect_table`\nThis is actually already happening, but it refers to the contents of\n`self.meta` -- this oddly seems to update the _types_ of any columns if\nthat is merited, but doesn't drop columns that are no longer present in\nthe most recent view.\n\nManually popping out columns\nIt's called an ImmutableColumnCollection for a reason, I guess.",
          "timestamp": "2023-02-21T17:39:04-05:00",
          "tree_id": "9e2be1cf074cddc8bfcc2e9469728423db5ea7ee",
          "url": "https://github.com/ibis-project/ibis/commit/62c8deabce1f64e6a828edabd925b9f0356b0424"
        },
        "date": 1677019455075,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 76.88605164226135,
            "unit": "iter/sec",
            "range": "stddev: 0.0011631926050711817",
            "extra": "mean: 13.006260285712708 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 59.680558153073406,
            "unit": "iter/sec",
            "range": "stddev: 0.0015182549557045892",
            "extra": "mean: 16.75587546341509 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 79.06850723540221,
            "unit": "iter/sec",
            "range": "stddev: 0.0009967608741614244",
            "extra": "mean: 12.64726039436671 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 195.62520102523848,
            "unit": "iter/sec",
            "range": "stddev: 0.000533769714172345",
            "extra": "mean: 5.111815833334201 msec\nrounds: 150"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 56.45365160847839,
            "unit": "iter/sec",
            "range": "stddev: 0.0018947250650993583",
            "extra": "mean: 17.713646000001475 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 105351.21452709172,
            "unit": "iter/sec",
            "range": "stddev: 0.000013444572122745459",
            "extra": "mean: 9.492059531433725 usec\nrounds: 28170"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 438.99357995158357,
            "unit": "iter/sec",
            "range": "stddev: 0.00033685917171382394",
            "extra": "mean: 2.277937641161608 msec\nrounds: 379"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.220322346768855,
            "unit": "iter/sec",
            "range": "stddev: 0.004614596394873525",
            "extra": "mean: 236.94872520001127 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 31.056840736764833,
            "unit": "iter/sec",
            "range": "stddev: 0.0006934794707657864",
            "extra": "mean: 32.199025279999205 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 372.6789434402781,
            "unit": "iter/sec",
            "range": "stddev: 0.0004566918661218117",
            "extra": "mean: 2.6832747532468257 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 177.17056837247418,
            "unit": "iter/sec",
            "range": "stddev: 0.0006463812834505918",
            "extra": "mean: 5.644278331249986 msec\nrounds: 160"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 79.74650052967334,
            "unit": "iter/sec",
            "range": "stddev: 0.0010430943246802341",
            "extra": "mean: 12.539735202899646 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 242.73510532253027,
            "unit": "iter/sec",
            "range": "stddev: 0.0006620153947891175",
            "extra": "mean: 4.119717247619649 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.143980338838227,
            "unit": "iter/sec",
            "range": "stddev: 0.026241697696306448",
            "extra": "mean: 874.1408973999967 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 72.25131879462705,
            "unit": "iter/sec",
            "range": "stddev: 0.0017512564023952422",
            "extra": "mean: 13.840577814814429 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 137.2632087399283,
            "unit": "iter/sec",
            "range": "stddev: 0.0006554394346410937",
            "extra": "mean: 7.285273374999512 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 31.38224344011059,
            "unit": "iter/sec",
            "range": "stddev: 0.002153115958782844",
            "extra": "mean: 31.865153360000704 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 255.22823299341607,
            "unit": "iter/sec",
            "range": "stddev: 0.0003282032993751767",
            "extra": "mean: 3.9180618392863935 msec\nrounds: 168"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4460452.698977797,
            "unit": "iter/sec",
            "range": "stddev: 1.5179187396261975e-7",
            "extra": "mean: 224.19249064774434 nsec\nrounds: 53195"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 61.38506396245952,
            "unit": "iter/sec",
            "range": "stddev: 0.0014347768184921378",
            "extra": "mean: 16.290607770834242 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4517367.090846028,
            "unit": "iter/sec",
            "range": "stddev: 1.5902143567333542e-7",
            "extra": "mean: 221.36788529455796 nsec\nrounds: 54348"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 63.11491404253795,
            "unit": "iter/sec",
            "range": "stddev: 0.001230933166429012",
            "extra": "mean: 15.84411569230727 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 11.906790583269663,
            "unit": "iter/sec",
            "range": "stddev: 0.002235747044014708",
            "extra": "mean: 83.98568808332858 msec\nrounds: 12"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 61.01539759541797,
            "unit": "iter/sec",
            "range": "stddev: 0.0011728130237829342",
            "extra": "mean: 16.38930564102554 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 73.32389275156366,
            "unit": "iter/sec",
            "range": "stddev: 0.0008932610441824498",
            "extra": "mean: 13.638119342465961 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 42.78697811285355,
            "unit": "iter/sec",
            "range": "stddev: 0.022602598019350644",
            "extra": "mean: 23.371596782610645 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 69.40064539241382,
            "unit": "iter/sec",
            "range": "stddev: 0.0012862164880240142",
            "extra": "mean: 14.409087903227336 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 98.62221970443917,
            "unit": "iter/sec",
            "range": "stddev: 0.0007784403440144442",
            "extra": "mean: 10.139702827586916 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 134.3498959053242,
            "unit": "iter/sec",
            "range": "stddev: 0.00036418242258946337",
            "extra": "mean: 7.44325102197843 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 105.53917420297377,
            "unit": "iter/sec",
            "range": "stddev: 0.000800621959552421",
            "extra": "mean: 9.475154676469158 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 555.6020088919348,
            "unit": "iter/sec",
            "range": "stddev: 0.00037494338717993707",
            "extra": "mean: 1.7998495037740243 msec\nrounds: 530"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.9758704753296326,
            "unit": "iter/sec",
            "range": "stddev: 0.011553907439917334",
            "extra": "mean: 506.1060491999967 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 58.04082053836669,
            "unit": "iter/sec",
            "range": "stddev: 0.0007643550042877989",
            "extra": "mean: 17.229253320755014 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 5635.780302961604,
            "unit": "iter/sec",
            "range": "stddev: 0.0000370249957160238",
            "extra": "mean: 177.43771869079063 usec\nrounds: 2627"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.5686734648905122,
            "unit": "iter/sec",
            "range": "stddev: 0.03176763144111359",
            "extra": "mean: 1.758478391799997 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 7.5752161916987,
            "unit": "iter/sec",
            "range": "stddev: 0.0035517675460793965",
            "extra": "mean: 132.00943375000307 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11781909.813631764,
            "unit": "iter/sec",
            "range": "stddev: 4.989487867759466e-8",
            "extra": "mean: 84.87588309679828 nsec\nrounds: 126583"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 813.1847851003365,
            "unit": "iter/sec",
            "range": "stddev: 0.0002674172557392529",
            "extra": "mean: 1.2297327966811538 msec\nrounds: 241"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 66.35436615599953,
            "unit": "iter/sec",
            "range": "stddev: 0.002913528742656428",
            "extra": "mean: 15.070598333333388 msec\nrounds: 12"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 21.352418824083873,
            "unit": "iter/sec",
            "range": "stddev: 0.0027192178859616737",
            "extra": "mean: 46.833101590910985 msec\nrounds: 22"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 198.22329712571803,
            "unit": "iter/sec",
            "range": "stddev: 0.0005427547524915247",
            "extra": "mean: 5.044815692707279 msec\nrounds: 192"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 7224.820686155644,
            "unit": "iter/sec",
            "range": "stddev: 0.00010283557485625478",
            "extra": "mean: 138.41173967351486 usec\nrounds: 4406"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 9879.058997873766,
            "unit": "iter/sec",
            "range": "stddev: 0.00002356479514835396",
            "extra": "mean: 101.22421580994975 usec\nrounds: 5718"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 213.91053437715496,
            "unit": "iter/sec",
            "range": "stddev: 0.0006612385346777468",
            "extra": "mean: 4.674851581815305 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 60.17007592001024,
            "unit": "iter/sec",
            "range": "stddev: 0.0010699915125886568",
            "extra": "mean: 16.619556892854753 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3225.623651668502,
            "unit": "iter/sec",
            "range": "stddev: 0.00007312441086017982",
            "extra": "mean: 310.01756807020405 usec\nrounds: 1829"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2762.3525550614427,
            "unit": "iter/sec",
            "range": "stddev: 0.00008238092813563541",
            "extra": "mean: 362.0102720659989 usec\nrounds: 1099"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 8635.933980912792,
            "unit": "iter/sec",
            "range": "stddev: 0.0000345433528484825",
            "extra": "mean: 115.79523444831881 usec\nrounds: 2781"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 436403.4504248228,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014496767472385157",
            "extra": "mean: 2.29145759279982 usec\nrounds: 1969"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 69.67146678203028,
            "unit": "iter/sec",
            "range": "stddev: 0.0011101126573245456",
            "extra": "mean: 14.353078041668569 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.5612820110760672,
            "unit": "iter/sec",
            "range": "stddev: 0.019260661766557233",
            "extra": "mean: 1.7816355776000024 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1585292.0369469405,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015422448969839334",
            "extra": "mean: 630.7986015787133 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 48.40057273067834,
            "unit": "iter/sec",
            "range": "stddev: 0.001124310073952366",
            "extra": "mean: 20.66091253846171 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1651426.8821757806,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012011909908920087",
            "extra": "mean: 605.5369515860639 nsec\nrounds: 181819"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 200.40292287048015,
            "unit": "iter/sec",
            "range": "stddev: 0.0004308377813875808",
            "extra": "mean: 4.989947180791855 msec\nrounds: 177"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 195.28583857433182,
            "unit": "iter/sec",
            "range": "stddev: 0.0006311352961864298",
            "extra": "mean: 5.120699008696266 msec\nrounds: 230"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1518701.8736062557,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011937255556557953",
            "extra": "mean: 658.4570792853738 nsec\nrounds: 87720"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 568151.2520603158,
            "unit": "iter/sec",
            "range": "stddev: 0.000004877352984889581",
            "extra": "mean: 1.7600946867117673 usec\nrounds: 19084"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.5490383631228086,
            "unit": "iter/sec",
            "range": "stddev: 0.05409297091406863",
            "extra": "mean: 1.8213663509999947 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 33.47935917012798,
            "unit": "iter/sec",
            "range": "stddev: 0.002173981055306082",
            "extra": "mean: 29.869149971432307 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 50.10414517537883,
            "unit": "iter/sec",
            "range": "stddev: 0.024700810263720695",
            "extra": "mean: 19.958428519231575 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 80.34761458718857,
            "unit": "iter/sec",
            "range": "stddev: 0.0011328182449098067",
            "extra": "mean: 12.445920207311916 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.08681345370039141,
            "unit": "iter/sec",
            "range": "stddev: 0.18145443821091295",
            "extra": "mean: 11.518951929399986 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 100.4647990928862,
            "unit": "iter/sec",
            "range": "stddev: 0.0005836171351181453",
            "extra": "mean: 9.953735129410207 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 191.56173820780475,
            "unit": "iter/sec",
            "range": "stddev: 0.0006125325980043366",
            "extra": "mean: 5.220249144509262 msec\nrounds: 173"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1553763.4265590985,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012869626454298388",
            "extra": "mean: 643.5986218407518 nsec\nrounds: 138889"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1279.089030838354,
            "unit": "iter/sec",
            "range": "stddev: 0.00030004372838053487",
            "extra": "mean: 781.806407443405 usec\nrounds: 1048"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 35.63954843565677,
            "unit": "iter/sec",
            "range": "stddev: 0.0028829130298553703",
            "extra": "mean: 28.058716900001933 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 52952.39707537271,
            "unit": "iter/sec",
            "range": "stddev: 0.000010190666904229278",
            "extra": "mean: 18.884886336242626 usec\nrounds: 9141"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 70.05572024659314,
            "unit": "iter/sec",
            "range": "stddev: 0.0008474484812499627",
            "extra": "mean: 14.274351851355505 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2863.4106928971564,
            "unit": "iter/sec",
            "range": "stddev: 0.00008320537769968311",
            "extra": "mean: 349.23387081027306 usec\nrounds: 1432"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 3236.385572881179,
            "unit": "iter/sec",
            "range": "stddev: 0.000076729188158126",
            "extra": "mean: 308.9866696908286 usec\nrounds: 1874"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 3076.9005155584873,
            "unit": "iter/sec",
            "range": "stddev: 0.00011004604888165313",
            "extra": "mean: 325.00238306160844 usec\nrounds: 1535"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 74.64816602443976,
            "unit": "iter/sec",
            "range": "stddev: 0.0012211366644962688",
            "extra": "mean: 13.396176400001584 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2755.8650474143365,
            "unit": "iter/sec",
            "range": "stddev: 0.00008874779679452352",
            "extra": "mean: 362.8624706925473 usec\nrounds: 1689"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5326518.248925351,
            "unit": "iter/sec",
            "range": "stddev: 7.020016990243196e-8",
            "extra": "mean: 187.73989936137014 nsec\nrounds: 58824"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 88.98149748160782,
            "unit": "iter/sec",
            "range": "stddev: 0.0007616510260592005",
            "extra": "mean: 11.238291423525398 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 57.098663621036444,
            "unit": "iter/sec",
            "range": "stddev: 0.0013943616233221226",
            "extra": "mean: 17.5135447413795 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 185.60427389759354,
            "unit": "iter/sec",
            "range": "stddev: 0.0005553995967816671",
            "extra": "mean: 5.387806966943801 msec\nrounds: 121"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.4933036026421361,
            "unit": "iter/sec",
            "range": "stddev: 0.02454555049602121",
            "extra": "mean: 2.0271491930000023 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2955.983575700319,
            "unit": "iter/sec",
            "range": "stddev: 0.00011849590902589115",
            "extra": "mean: 338.2968728989248 usec\nrounds: 1904"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 3068.2294713067968,
            "unit": "iter/sec",
            "range": "stddev: 0.00011221499763042928",
            "extra": "mean: 325.92086392224365 usec\nrounds: 2697"
          }
        ]
      }
    ]
  }
}