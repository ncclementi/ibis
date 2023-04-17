window.BENCHMARK_DATA = {
  "lastUpdate": 1681741804022,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "committer": {
            "email": "96536427+ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "distinct": true,
          "id": "dbcbeadce141f2ebe9a3d0de156db7177bf0e1f9",
          "message": "chore(flake/nixpkgs): `10193ca1` -> `9a60b3ee`",
          "timestamp": "2023-04-17T14:12:22Z",
          "tree_id": "5c8ba7724986cdcf5dd696e6be041be2f0c433cd",
          "url": "https://github.com/ibis-project/ibis/commit/dbcbeadce141f2ebe9a3d0de156db7177bf0e1f9"
        },
        "date": 1681741423563,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1144.701850730581,
            "unit": "iter/sec",
            "range": "stddev: 0.00011021050675022939",
            "extra": "mean: 873.5899215693343 usec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 98.55956260659258,
            "unit": "iter/sec",
            "range": "stddev: 0.0006366576450024363",
            "extra": "mean: 10.146148923078831 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 86.34381402176105,
            "unit": "iter/sec",
            "range": "stddev: 0.00876588172020871",
            "extra": "mean: 11.581605600002476 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 84.89927499066957,
            "unit": "iter/sec",
            "range": "stddev: 0.00036831402804697534",
            "extra": "mean: 11.778663600011896 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 86.96629389370953,
            "unit": "iter/sec",
            "range": "stddev: 0.012145773831323665",
            "extra": "mean: 11.498707777776561 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2166.4138371416884,
            "unit": "iter/sec",
            "range": "stddev: 0.0000817846297096885",
            "extra": "mean: 461.592325000737 usec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 276.14652116740007,
            "unit": "iter/sec",
            "range": "stddev: 0.0004005841526719364",
            "extra": "mean: 3.621265970588852 msec\nrounds: 136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 204.93808910136195,
            "unit": "iter/sec",
            "range": "stddev: 0.004097975423338414",
            "extra": "mean: 4.87952241764781 msec\nrounds: 170"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 86.90050449846373,
            "unit": "iter/sec",
            "range": "stddev: 0.0009734100123419991",
            "extra": "mean: 11.507413055555718 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1977.322188372007,
            "unit": "iter/sec",
            "range": "stddev: 0.00012469093113240282",
            "extra": "mean: 505.7344755855555 usec\nrounds: 1495"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 11.130649286028925,
            "unit": "iter/sec",
            "range": "stddev: 0.0019216246438922902",
            "extra": "mean: 89.84201858333545 msec\nrounds: 12"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5231175.0919910045,
            "unit": "iter/sec",
            "range": "stddev: 5.5064719915712956e-8",
            "extra": "mean: 191.16163814322655 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4145.005370534397,
            "unit": "iter/sec",
            "range": "stddev: 0.00004377304478965416",
            "extra": "mean: 241.2542109375058 usec\nrounds: 896"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 95.41984298750405,
            "unit": "iter/sec",
            "range": "stddev: 0.0010616053652729978",
            "extra": "mean: 10.480000476745255 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 96.3208622235231,
            "unit": "iter/sec",
            "range": "stddev: 0.0009279260320830472",
            "extra": "mean: 10.381966864866625 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 286.7148613471499,
            "unit": "iter/sec",
            "range": "stddev: 0.000276202892903602",
            "extra": "mean: 3.487785723074939 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 6605419.772915463,
            "unit": "iter/sec",
            "range": "stddev: 2.937700591504081e-8",
            "extra": "mean: 151.39083273715403 nsec\nrounds: 74069"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 112.38284640144494,
            "unit": "iter/sec",
            "range": "stddev: 0.0004863294352125912",
            "extra": "mean: 8.8981551190462 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2125.560919341287,
            "unit": "iter/sec",
            "range": "stddev: 0.00010142377842572486",
            "extra": "mean: 470.46405064217157 usec\nrounds: 1402"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 85.0604951038497,
            "unit": "iter/sec",
            "range": "stddev: 0.0009085208358672887",
            "extra": "mean: 11.75633881250171 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2189.46117879785,
            "unit": "iter/sec",
            "range": "stddev: 0.00010298338764880834",
            "extra": "mean: 456.73337791221394 usec\nrounds: 1159"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 103.63028579436512,
            "unit": "iter/sec",
            "range": "stddev: 0.00041724263637020335",
            "extra": "mean: 9.64968872115544 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 33.976993939567414,
            "unit": "iter/sec",
            "range": "stddev: 0.025167808404464694",
            "extra": "mean: 29.43167961764459 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 46.12733325942677,
            "unit": "iter/sec",
            "range": "stddev: 0.001083170101027441",
            "extra": "mean: 21.679120151513114 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 14.258987849987875,
            "unit": "iter/sec",
            "range": "stddev: 0.0023083191681645557",
            "extra": "mean: 70.13120499999938 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6734143558506056,
            "unit": "iter/sec",
            "range": "stddev: 0.012188711313557263",
            "extra": "mean: 597.5806269999964 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1668.6180820184916,
            "unit": "iter/sec",
            "range": "stddev: 0.00007274180072196531",
            "extra": "mean: 599.2983120441326 usec\nrounds: 1096"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 273.2830136684268,
            "unit": "iter/sec",
            "range": "stddev: 0.0003899992236646015",
            "extra": "mean: 3.6592102325587494 msec\nrounds: 258"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13378.827954343707,
            "unit": "iter/sec",
            "range": "stddev: 0.000009509262594891974",
            "extra": "mean: 74.7449629678009 usec\nrounds: 7912"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 23.77348050595193,
            "unit": "iter/sec",
            "range": "stddev: 0.0010863243698200967",
            "extra": "mean: 42.06367678260824 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 5459846.85507485,
            "unit": "iter/sec",
            "range": "stddev: 4.180076636256213e-8",
            "extra": "mean: 183.15532038608117 nsec\nrounds: 192271"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 393896.5644266972,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010542633724957675",
            "extra": "mean: 2.538737552726476 usec\nrounds: 2149"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 144.7889340520329,
            "unit": "iter/sec",
            "range": "stddev: 0.0004136750113479705",
            "extra": "mean: 6.906605166667153 msec\nrounds: 120"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 72.0171495878684,
            "unit": "iter/sec",
            "range": "stddev: 0.0007059533918808049",
            "extra": "mean: 13.88558149999947 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 709.908602590115,
            "unit": "iter/sec",
            "range": "stddev: 0.0001320360415606364",
            "extra": "mean: 1.4086320356613244 msec\nrounds: 673"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 96.54970484056079,
            "unit": "iter/sec",
            "range": "stddev: 0.0008397277286261092",
            "extra": "mean: 10.357359472526294 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1762470.1954191402,
            "unit": "iter/sec",
            "range": "stddev: 3.840096867216176e-7",
            "extra": "mean: 567.3854812405415 nsec\nrounds: 166667"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 257.85674683692446,
            "unit": "iter/sec",
            "range": "stddev: 0.00036180719014831123",
            "extra": "mean: 3.8781222995589366 msec\nrounds: 227"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 57.91456664747885,
            "unit": "iter/sec",
            "range": "stddev: 0.0008743026765811724",
            "extra": "mean: 17.266813133333397 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 100.87390158575629,
            "unit": "iter/sec",
            "range": "stddev: 0.016123372138124016",
            "extra": "mean: 9.91336692920385 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 152363.8058096321,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014278803013195694",
            "extra": "mean: 6.563238524308259 usec\nrounds: 38168"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 253.08001455723712,
            "unit": "iter/sec",
            "range": "stddev: 0.00032046032802979604",
            "extra": "mean: 3.951319513512347 msec\nrounds: 185"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 605.6941631482536,
            "unit": "iter/sec",
            "range": "stddev: 0.00012978731667077933",
            "extra": "mean: 1.6509982443981943 msec\nrounds: 491"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1531257.5047703367,
            "unit": "iter/sec",
            "range": "stddev: 3.974466184231504e-7",
            "extra": "mean: 653.0580238037647 nsec\nrounds: 128206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 261.06242918300705,
            "unit": "iter/sec",
            "range": "stddev: 0.00017892542149212245",
            "extra": "mean: 3.83050139818852 msec\nrounds: 221"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8359835371326965,
            "unit": "iter/sec",
            "range": "stddev: 0.020224352391518957",
            "extra": "mean: 1.1961958048000043 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 88.60852992495305,
            "unit": "iter/sec",
            "range": "stddev: 0.0008575949983285447",
            "extra": "mean: 11.285595199998797 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 142.19231729408526,
            "unit": "iter/sec",
            "range": "stddev: 0.004245230181185778",
            "extra": "mean: 7.032728765027284 msec\nrounds: 183"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 87.79095981683845,
            "unit": "iter/sec",
            "range": "stddev: 0.0009752779380014358",
            "extra": "mean: 11.390694464285815 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 252.94393008762538,
            "unit": "iter/sec",
            "range": "stddev: 0.00033578054552287436",
            "extra": "mean: 3.9534453333336677 msec\nrounds: 258"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 68.77558172239041,
            "unit": "iter/sec",
            "range": "stddev: 0.0007675977148727239",
            "extra": "mean: 14.540044227273214 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.4692101470333987,
            "unit": "iter/sec",
            "range": "stddev: 0.015981498383292717",
            "extra": "mean: 404.9878060000026 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 77.09528717613489,
            "unit": "iter/sec",
            "range": "stddev: 0.022129636904775648",
            "extra": "mean: 12.970961476741905 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 240.22939631488174,
            "unit": "iter/sec",
            "range": "stddev: 0.00033194071385687115",
            "extra": "mean: 4.162687894737268 msec\nrounds: 133"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 102.52180834613237,
            "unit": "iter/sec",
            "range": "stddev: 0.00042553798489510463",
            "extra": "mean: 9.754022252746626 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2037.9964460961266,
            "unit": "iter/sec",
            "range": "stddev: 0.00010364087146020367",
            "extra": "mean: 490.67799009931775 usec\nrounds: 1212"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7564030013669911,
            "unit": "iter/sec",
            "range": "stddev: 0.027407926820978982",
            "extra": "mean: 1.3220465785999977 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.495530456228176,
            "unit": "iter/sec",
            "range": "stddev: 0.0035836570237120936",
            "extra": "mean: 181.9660555000079 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 88.93425939303249,
            "unit": "iter/sec",
            "range": "stddev: 0.0008407644299736686",
            "extra": "mean: 11.244260724999577 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 88.38961561069671,
            "unit": "iter/sec",
            "range": "stddev: 0.0009643258949651902",
            "extra": "mean: 11.31354620212855 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 254.3389543805418,
            "unit": "iter/sec",
            "range": "stddev: 0.0003849840376162888",
            "extra": "mean: 3.9317610722885985 msec\nrounds: 249"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 31.483484258111126,
            "unit": "iter/sec",
            "range": "stddev: 0.03536868591647992",
            "extra": "mean: 31.7626852162136 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 68755.09362055619,
            "unit": "iter/sec",
            "range": "stddev: 0.00001587636322500976",
            "extra": "mean: 14.54437696672735 usec\nrounds: 11948"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 95.68259078462104,
            "unit": "iter/sec",
            "range": "stddev: 0.000394755896828953",
            "extra": "mean: 10.451222022729018 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 721673.1802603095,
            "unit": "iter/sec",
            "range": "stddev: 6.222681079494237e-7",
            "extra": "mean: 1.3856687865818946 usec\nrounds: 25316"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1669437.7072894177,
            "unit": "iter/sec",
            "range": "stddev: 4.426668586970384e-7",
            "extra": "mean: 599.0040812146564 nsec\nrounds: 131579"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 148.5568194089207,
            "unit": "iter/sec",
            "range": "stddev: 0.0004415804695443222",
            "extra": "mean: 6.73143113846143 msec\nrounds: 130"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1995.6686779968377,
            "unit": "iter/sec",
            "range": "stddev: 0.00010161175133935906",
            "extra": "mean: 501.0851806341697 usec\nrounds: 1229"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 94.3609551041808,
            "unit": "iter/sec",
            "range": "stddev: 0.0009014991459891868",
            "extra": "mean: 10.597603626372084 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 146.99431451950034,
            "unit": "iter/sec",
            "range": "stddev: 0.0002782460117682783",
            "extra": "mean: 6.802984205673748 msec\nrounds: 141"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9447614.750420602,
            "unit": "iter/sec",
            "range": "stddev: 1.9724785487315634e-8",
            "extra": "mean: 105.8468223373912 nsec\nrounds: 86957"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7624.940210898074,
            "unit": "iter/sec",
            "range": "stddev: 0.00003130887487644564",
            "extra": "mean: 131.14856934494165 usec\nrounds: 3634"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11535.705767364532,
            "unit": "iter/sec",
            "range": "stddev: 0.00001752197836388532",
            "extra": "mean: 86.68737051434536 usec\nrounds: 5406"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 69.04262481570385,
            "unit": "iter/sec",
            "range": "stddev: 0.02502881496240215",
            "extra": "mean: 14.483806238092914 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1846.8658844703566,
            "unit": "iter/sec",
            "range": "stddev: 0.00013390442785166494",
            "extra": "mean: 541.457833191163 usec\nrounds: 1169"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 249.0372327547251,
            "unit": "iter/sec",
            "range": "stddev: 0.0004927281787974521",
            "extra": "mean: 4.015463828193483 msec\nrounds: 227"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2423515.8617654485,
            "unit": "iter/sec",
            "range": "stddev: 9.322732393627409e-8",
            "extra": "mean: 412.62366621022176 nsec\nrounds: 128206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 87.18170905183246,
            "unit": "iter/sec",
            "range": "stddev: 0.0010338187240614201",
            "extra": "mean: 11.470295901236192 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 489.5130704503203,
            "unit": "iter/sec",
            "range": "stddev: 0.00020300456728715164",
            "extra": "mean: 2.042846371967279 msec\nrounds: 371"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.677282932049204,
            "unit": "iter/sec",
            "range": "stddev: 0.025459580646837867",
            "extra": "mean: 1.4764878202000091 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 39.10918411725607,
            "unit": "iter/sec",
            "range": "stddev: 0.001104184349951551",
            "extra": "mean: 25.569441617647346 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 183.4003296973921,
            "unit": "iter/sec",
            "range": "stddev: 0.00036724732688269877",
            "extra": "mean: 5.452552902440173 msec\nrounds: 123"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9471.93703161514,
            "unit": "iter/sec",
            "range": "stddev: 0.000011733319653778576",
            "extra": "mean: 105.57502617070097 usec\nrounds: 5082"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 87.4171090274897,
            "unit": "iter/sec",
            "range": "stddev: 0.0002743898613079371",
            "extra": "mean: 11.439408270588475 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1573585369285186,
            "unit": "iter/sec",
            "range": "stddev: 0.10157404872973506",
            "extra": "mean: 6.354914194799983 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1946.5696883494845,
            "unit": "iter/sec",
            "range": "stddev: 0.00009724979705276754",
            "extra": "mean: 513.7242226595596 usec\nrounds: 1271"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 52.63151246546237,
            "unit": "iter/sec",
            "range": "stddev: 0.0007475065006014505",
            "extra": "mean: 19.000023999998398 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.824505925134806,
            "unit": "iter/sec",
            "range": "stddev: 0.010042294495759838",
            "extra": "mean: 1.212847560600005 sec\nrounds: 5"
          }
        ]
      },
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
          "id": "76e38a320fbb1fc5a7ff60e403975cc214cb8c70",
          "message": "fix(sqlalchemy): ensure that backends don't clobber tables needed by inputs",
          "timestamp": "2023-04-17T10:24:57-04:00",
          "tree_id": "37a459af66acc7b02e9aff1763c24955fa25f6dc",
          "url": "https://github.com/ibis-project/ibis/commit/76e38a320fbb1fc5a7ff60e403975cc214cb8c70"
        },
        "date": 1681741717329,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11507.643222604267,
            "unit": "iter/sec",
            "range": "stddev: 0.00001179578754112103",
            "extra": "mean: 86.89876638126188 usec\nrounds: 351"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 102.09829415824582,
            "unit": "iter/sec",
            "range": "stddev: 0.0007477230810226218",
            "extra": "mean: 9.79448293670866 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 117.5406521625046,
            "unit": "iter/sec",
            "range": "stddev: 0.00011202142168323587",
            "extra": "mean: 8.507694840908831 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 85.2228340208349,
            "unit": "iter/sec",
            "range": "stddev: 0.00010399511767756333",
            "extra": "mean: 11.733944446807818 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 269.14971304326957,
            "unit": "iter/sec",
            "range": "stddev: 0.000321547268032827",
            "extra": "mean: 3.7154042955982503 msec\nrounds: 159"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 11.228886900844572,
            "unit": "iter/sec",
            "range": "stddev: 0.0002996068941079174",
            "extra": "mean: 89.0560220999987 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5772755.97963575,
            "unit": "iter/sec",
            "range": "stddev: 1.0905267123910143e-8",
            "extra": "mean: 173.2274850224327 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 100.81522416346506,
            "unit": "iter/sec",
            "range": "stddev: 0.00022630459862287992",
            "extra": "mean: 9.91913679999925 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9454640565616709,
            "unit": "iter/sec",
            "range": "stddev: 0.0028333045112416007",
            "extra": "mean: 1.0576816675999907 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 87.51470747167299,
            "unit": "iter/sec",
            "range": "stddev: 0.0005845826918894116",
            "extra": "mean: 11.426650775513163 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 354.64344018321333,
            "unit": "iter/sec",
            "range": "stddev: 0.000035234706680378266",
            "extra": "mean: 2.8197335314686414 msec\nrounds: 286"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2224.2408443726063,
            "unit": "iter/sec",
            "range": "stddev: 0.00010589642727155278",
            "extra": "mean: 449.59159999692884 usec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2330.6906956513944,
            "unit": "iter/sec",
            "range": "stddev: 0.00008191800223775494",
            "extra": "mean: 429.05736135035045 usec\nrounds: 1511"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 83.83984144597595,
            "unit": "iter/sec",
            "range": "stddev: 0.013594578974496592",
            "extra": "mean: 11.927503472729871 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6366287.218287986,
            "unit": "iter/sec",
            "range": "stddev: 9.365175435155291e-9",
            "extra": "mean: 157.07742451967138 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 107.50226822637283,
            "unit": "iter/sec",
            "range": "stddev: 0.000030728420528377814",
            "extra": "mean: 9.302129308511432 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 164.07134016213394,
            "unit": "iter/sec",
            "range": "stddev: 0.00007579104827876996",
            "extra": "mean: 6.0949096838717125 msec\nrounds: 155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 39.22636580215164,
            "unit": "iter/sec",
            "range": "stddev: 0.0005252270218340632",
            "extra": "mean: 25.493057527780156 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 277.0559112978338,
            "unit": "iter/sec",
            "range": "stddev: 0.0002415206399333905",
            "extra": "mean: 3.609379764956557 msec\nrounds: 234"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 249.48664673080995,
            "unit": "iter/sec",
            "range": "stddev: 0.006455728594795694",
            "extra": "mean: 4.008230553032266 msec\nrounds: 264"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 53.94631496363624,
            "unit": "iter/sec",
            "range": "stddev: 0.00044184668413208076",
            "extra": "mean: 18.536947346154655 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 681.4291309593394,
            "unit": "iter/sec",
            "range": "stddev: 0.00005392238999256495",
            "extra": "mean: 1.4675040361015468 msec\nrounds: 554"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13436.082520687802,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018602380112422414",
            "extra": "mean: 74.42645566222745 usec\nrounds: 6676"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 132.92534475218244,
            "unit": "iter/sec",
            "range": "stddev: 0.00006474848205276661",
            "extra": "mean: 7.523019796294953 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 42.849717725960424,
            "unit": "iter/sec",
            "range": "stddev: 0.0007563491281175365",
            "extra": "mean: 23.33737660526412 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2413.5554640102773,
            "unit": "iter/sec",
            "range": "stddev: 0.00008312132162356179",
            "extra": "mean: 414.3265049888001 usec\nrounds: 1303"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 60.084587697382034,
            "unit": "iter/sec",
            "range": "stddev: 0.0006689812720696678",
            "extra": "mean: 16.64320316278997 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1769791.2264745021,
            "unit": "iter/sec",
            "range": "stddev: 1.1241915247950193e-7",
            "extra": "mean: 565.0383983381146 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8610556649671117,
            "unit": "iter/sec",
            "range": "stddev: 0.0012015485576284909",
            "extra": "mean: 1.1613651018000042 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 282.0749093189462,
            "unit": "iter/sec",
            "range": "stddev: 0.0002817299993459895",
            "extra": "mean: 3.5451575697194873 msec\nrounds: 251"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 37.9984164413264,
            "unit": "iter/sec",
            "range": "stddev: 0.020704350421041903",
            "extra": "mean: 26.316886166667143 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.18111039555625397,
            "unit": "iter/sec",
            "range": "stddev: 0.13563638181456564",
            "extra": "mean: 5.521494207599995 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 100.99858958224607,
            "unit": "iter/sec",
            "range": "stddev: 0.0008431591674064068",
            "extra": "mean: 9.90112836363592 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 96.61426031167132,
            "unit": "iter/sec",
            "range": "stddev: 0.0007021552015207613",
            "extra": "mean: 10.350438918375662 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 95.86017025703805,
            "unit": "iter/sec",
            "range": "stddev: 0.0006469670564988086",
            "extra": "mean: 10.431861296705552 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 97.12135828464532,
            "unit": "iter/sec",
            "range": "stddev: 0.0007911308519124975",
            "extra": "mean: 10.29639636082085 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.8127961813474698,
            "unit": "iter/sec",
            "range": "stddev: 0.0010900676881266788",
            "extra": "mean: 551.6339951999953 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 489344.5792150768,
            "unit": "iter/sec",
            "range": "stddev: 2.6013989663872827e-7",
            "extra": "mean: 2.0435497652881525 usec\nrounds: 2130"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5727612951518757,
            "unit": "iter/sec",
            "range": "stddev: 0.0013368112409495143",
            "extra": "mean: 388.68743939999604 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4709.0215820549365,
            "unit": "iter/sec",
            "range": "stddev: 0.000023569473500426186",
            "extra": "mean: 212.35833868563776 usec\nrounds: 1993"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 137984.0785073679,
            "unit": "iter/sec",
            "range": "stddev: 4.707773162935393e-7",
            "extra": "mean: 7.247212945271821 usec\nrounds: 38315"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2410.5697532695863,
            "unit": "iter/sec",
            "range": "stddev: 0.00008539538644523739",
            "extra": "mean: 414.83968619603144 usec\nrounds: 1246"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 216.02863985266816,
            "unit": "iter/sec",
            "range": "stddev: 0.010666265172120553",
            "extra": "mean: 4.62901585957307 msec\nrounds: 235"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.796356562065899,
            "unit": "iter/sec",
            "range": "stddev: 0.0001832831400917974",
            "extra": "mean: 63.30573737499989 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 101.02708564125808,
            "unit": "iter/sec",
            "range": "stddev: 0.0008155337780778547",
            "extra": "mean: 9.898335616162857 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 95.4809135678099,
            "unit": "iter/sec",
            "range": "stddev: 0.0007262605034792944",
            "extra": "mean: 10.47329735999862 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12705165.802147914,
            "unit": "iter/sec",
            "range": "stddev: 3.816227516290731e-9",
            "extra": "mean: 78.70814246521485 nsec\nrounds: 121952"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 157.97193540579943,
            "unit": "iter/sec",
            "range": "stddev: 0.00033381066518676936",
            "extra": "mean: 6.330238326391285 msec\nrounds: 144"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 100.19621438978892,
            "unit": "iter/sec",
            "range": "stddev: 0.0008753316325667105",
            "extra": "mean: 9.980416985713093 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 237.72489645052002,
            "unit": "iter/sec",
            "range": "stddev: 0.009351865884712686",
            "extra": "mean: 4.206543003829385 msec\nrounds: 261"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 538.6457118373349,
            "unit": "iter/sec",
            "range": "stddev: 0.00006377760611642294",
            "extra": "mean: 1.8565078641190202 msec\nrounds: 471"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.7104934382029737,
            "unit": "iter/sec",
            "range": "stddev: 0.002164972509458708",
            "extra": "mean: 1.4074725341999852 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 302.5429387195477,
            "unit": "iter/sec",
            "range": "stddev: 0.000041496966739221726",
            "extra": "mean: 3.3053159469935056 msec\nrounds: 283"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.037208093125294,
            "unit": "iter/sec",
            "range": "stddev: 0.0003995096360966231",
            "extra": "mean: 38.40657555999769 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 248.4847409501455,
            "unit": "iter/sec",
            "range": "stddev: 0.0035942405567472254",
            "extra": "mean: 4.024391985504792 msec\nrounds: 207"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2384.7497471738147,
            "unit": "iter/sec",
            "range": "stddev: 0.00008022292978478448",
            "extra": "mean: 419.3312112455857 usec\nrounds: 1245"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 748.9198629844324,
            "unit": "iter/sec",
            "range": "stddev: 0.000021924657108731647",
            "extra": "mean: 1.3352563464067009 msec\nrounds: 612"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 93.82623514572568,
            "unit": "iter/sec",
            "range": "stddev: 0.0001596437153447636",
            "extra": "mean: 10.657999848836049 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 94.09994561208086,
            "unit": "iter/sec",
            "range": "stddev: 0.0009674410911236408",
            "extra": "mean: 10.626998703298046 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 191.69887782907148,
            "unit": "iter/sec",
            "range": "stddev: 0.0001360015651763403",
            "extra": "mean: 5.216514626087958 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2272.9454777504343,
            "unit": "iter/sec",
            "range": "stddev: 0.00009097980874431431",
            "extra": "mean: 439.95775956302924 usec\nrounds: 1281"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 95.04859029091882,
            "unit": "iter/sec",
            "range": "stddev: 0.0007885981389365025",
            "extra": "mean: 10.52093457608642 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 146.02623302374366,
            "unit": "iter/sec",
            "range": "stddev: 0.00009629736690525057",
            "extra": "mean: 6.848084616668851 msec\nrounds: 120"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 277.1384253569036,
            "unit": "iter/sec",
            "range": "stddev: 0.0003022553990120894",
            "extra": "mean: 3.6083051230163514 msec\nrounds: 252"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7502736.658068859,
            "unit": "iter/sec",
            "range": "stddev: 5.007733198763505e-9",
            "extra": "mean: 133.28469938030733 nsec\nrounds: 62504"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 265.14319232219196,
            "unit": "iter/sec",
            "range": "stddev: 0.0003052537320864774",
            "extra": "mean: 3.7715469563511848 msec\nrounds: 252"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 98.89538439840726,
            "unit": "iter/sec",
            "range": "stddev: 0.0006806352777375338",
            "extra": "mean: 10.11169536458271 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.009101064944887,
            "unit": "iter/sec",
            "range": "stddev: 0.06574697208393603",
            "extra": "mean: 199.63661883332406 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1195.816616330371,
            "unit": "iter/sec",
            "range": "stddev: 0.000012859519324192684",
            "extra": "mean: 836.2486240312684 usec\nrounds: 258"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9788.761883132502,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017949623483786989",
            "extra": "mean: 102.15796562823223 usec\nrounds: 4364"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 94.54002725645385,
            "unit": "iter/sec",
            "range": "stddev: 0.0007485226274181016",
            "extra": "mean: 10.577530269663997 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2535024.9575864817,
            "unit": "iter/sec",
            "range": "stddev: 1.733156918772979e-8",
            "extra": "mean: 394.47343388360804 nsec\nrounds: 117648"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 100.15340056916429,
            "unit": "iter/sec",
            "range": "stddev: 0.0008944773943625824",
            "extra": "mean: 9.984683438775665 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2287.6388870115798,
            "unit": "iter/sec",
            "range": "stddev: 0.00011515244211332475",
            "extra": "mean: 437.1319292033604 usec\nrounds: 1356"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 167.43976499709896,
            "unit": "iter/sec",
            "range": "stddev: 0.004237098384611087",
            "extra": "mean: 5.972296963133733 msec\nrounds: 217"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2255.013586693889,
            "unit": "iter/sec",
            "range": "stddev: 0.00009133257409444081",
            "extra": "mean: 443.45630815737826 usec\nrounds: 1324"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 68583.14191579129,
            "unit": "iter/sec",
            "range": "stddev: 0.000001707023689051914",
            "extra": "mean: 14.580842639548857 usec\nrounds: 12805"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 93.76562554105693,
            "unit": "iter/sec",
            "range": "stddev: 0.0007149500383403462",
            "extra": "mean: 10.66488912359607 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 101.88956477256588,
            "unit": "iter/sec",
            "range": "stddev: 0.00013308757105066763",
            "extra": "mean: 9.814547762885857 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 47.0326786504086,
            "unit": "iter/sec",
            "range": "stddev: 0.00017573315171966092",
            "extra": "mean: 21.26181260975899 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2577466.7587039988,
            "unit": "iter/sec",
            "range": "stddev: 2.9698398128326415e-8",
            "extra": "mean: 387.977845542603 nsec\nrounds: 114943"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 74.19647871075698,
            "unit": "iter/sec",
            "range": "stddev: 0.0001077375082630097",
            "extra": "mean: 13.477728557689899 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7936.74926209608,
            "unit": "iter/sec",
            "range": "stddev: 0.000014163326976413694",
            "extra": "mean: 125.99616883145708 usec\nrounds: 3927"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 736644.4265821597,
            "unit": "iter/sec",
            "range": "stddev: 3.3066776363021535e-7",
            "extra": "mean: 1.3575070467033088 usec\nrounds: 22422"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9371190035508237,
            "unit": "iter/sec",
            "range": "stddev: 0.0028142866350062937",
            "extra": "mean: 1.067100332199982 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 110.13861550009108,
            "unit": "iter/sec",
            "range": "stddev: 0.00009132231972035745",
            "extra": "mean: 9.079467682242411 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1744.5544394078997,
            "unit": "iter/sec",
            "range": "stddev: 0.0000136214136180024",
            "extra": "mean: 573.2122640663476 usec\nrounds: 1333"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1588916.2519739852,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011337592211904133",
            "extra": "mean: 629.3597908370898 nsec\nrounds: 142858"
          }
        ]
      }
    ]
  }
}