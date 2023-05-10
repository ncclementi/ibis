window.BENCHMARK_DATA = {
  "lastUpdate": 1683682535345,
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
          "id": "d646e5cd8d17442e03f72613821d934395d6c5b5",
          "message": "chore(flake/nixpkgs): `e700696f` -> `4487c14e`",
          "timestamp": "2023-05-10T01:30:15Z",
          "tree_id": "2361e456b85411619c729c1aeac7d17c0cc614b1",
          "url": "https://github.com/ibis-project/ibis/commit/d646e5cd8d17442e03f72613821d934395d6c5b5"
        },
        "date": 1683682455140,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 5580832.835833928,
            "unit": "iter/sec",
            "range": "stddev: 1.4073442007357485e-8",
            "extra": "mean: 179.18472554477347 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 548.5010967308602,
            "unit": "iter/sec",
            "range": "stddev: 0.000048433912558095586",
            "extra": "mean: 1.823150411111543 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-oracle]",
            "value": 99.38011428704324,
            "unit": "iter/sec",
            "range": "stddev: 0.00056082960214603",
            "extra": "mean: 10.062375226412632 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 150.68441938896635,
            "unit": "iter/sec",
            "range": "stddev: 0.007099528988008192",
            "extra": "mean: 6.636386190789037 msec\nrounds: 152"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 178.76247239940463,
            "unit": "iter/sec",
            "range": "stddev: 0.00005555811723296432",
            "extra": "mean: 5.594015268292577 msec\nrounds: 164"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 187.17035684375503,
            "unit": "iter/sec",
            "range": "stddev: 0.00005141034460476868",
            "extra": "mean: 5.342726363634463 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 129.907898060845,
            "unit": "iter/sec",
            "range": "stddev: 0.00007636554030306454",
            "extra": "mean: 7.697761374998383 msec\nrounds: 112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 107.12461370638131,
            "unit": "iter/sec",
            "range": "stddev: 0.0006194960893352946",
            "extra": "mean: 9.334922809998716 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 287.1572718181601,
            "unit": "iter/sec",
            "range": "stddev: 0.0002510030778048051",
            "extra": "mean: 3.4824122463220837 msec\nrounds: 272"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2163.7500290952703,
            "unit": "iter/sec",
            "range": "stddev: 0.00008865215161607647",
            "extra": "mean: 462.16059459425196 usec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2111.5727259733644,
            "unit": "iter/sec",
            "range": "stddev: 0.0001128118469016295",
            "extra": "mean: 473.5806575352661 usec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 19.018124088018926,
            "unit": "iter/sec",
            "range": "stddev: 0.00013895062560113114",
            "extra": "mean: 52.5814215624969 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11681619.263376102,
            "unit": "iter/sec",
            "range": "stddev: 3.6706794432147688e-9",
            "extra": "mean: 85.60457051831597 nsec\nrounds: 116280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 95.26810459242111,
            "unit": "iter/sec",
            "range": "stddev: 0.0010171383393799372",
            "extra": "mean: 10.496692510869511 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 29.834964463051854,
            "unit": "iter/sec",
            "range": "stddev: 0.0002718667665487133",
            "extra": "mean: 33.51772049999984 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1942204.267875281,
            "unit": "iter/sec",
            "range": "stddev: 1.0135863473846514e-7",
            "extra": "mean: 514.87890153489 nsec\nrounds: 181819"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 252.3783138076268,
            "unit": "iter/sec",
            "range": "stddev: 0.00047868664623068976",
            "extra": "mean: 3.9623055757565657 msec\nrounds: 165"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 216.38988139619735,
            "unit": "iter/sec",
            "range": "stddev: 0.010648557455426172",
            "extra": "mean: 4.621288174603035 msec\nrounds: 126"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 993602.4053663759,
            "unit": "iter/sec",
            "range": "stddev: 1.4895869670123432e-7",
            "extra": "mean: 1.0064387873852472 usec\nrounds: 121952"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7082156.860233594,
            "unit": "iter/sec",
            "range": "stddev: 4.171201969142999e-9",
            "extra": "mean: 141.1999225285583 nsec\nrounds: 69445"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 49.34713382421061,
            "unit": "iter/sec",
            "range": "stddev: 0.00017185402247492387",
            "extra": "mean: 20.26460145714444 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 102.14212186317242,
            "unit": "iter/sec",
            "range": "stddev: 0.0006995613541614469",
            "extra": "mean: 9.79028026595708 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 56.67873830114725,
            "unit": "iter/sec",
            "range": "stddev: 0.0004293295491250198",
            "extra": "mean: 17.643300291667902 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9457355622136498,
            "unit": "iter/sec",
            "range": "stddev: 0.019089859605963523",
            "extra": "mean: 1.057378024000002 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.3123841758954637,
            "unit": "iter/sec",
            "range": "stddev: 0.049190090692000116",
            "extra": "mean: 761.972003599999 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 101.7108482885515,
            "unit": "iter/sec",
            "range": "stddev: 0.0007980978120579362",
            "extra": "mean: 9.831792938773074 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 14116.186635727578,
            "unit": "iter/sec",
            "range": "stddev: 0.000004999372304864021",
            "extra": "mean: 70.84066156146127 usec\nrounds: 6725"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 199.3809749992955,
            "unit": "iter/sec",
            "range": "stddev: 0.000052530801839797874",
            "extra": "mean: 5.0155236727252115 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 106.37619358535052,
            "unit": "iter/sec",
            "range": "stddev: 0.00008450288858713946",
            "extra": "mean: 9.400599573039374 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2736112.5574384877,
            "unit": "iter/sec",
            "range": "stddev: 1.818796016381427e-8",
            "extra": "mean: 365.4820403058626 nsec\nrounds: 123457"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 37.19268297413422,
            "unit": "iter/sec",
            "range": "stddev: 0.025912298905628708",
            "extra": "mean: 26.887008949998403 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 678.0668374845183,
            "unit": "iter/sec",
            "range": "stddev: 0.00008614378838451097",
            "extra": "mean: 1.4747808692573499 msec\nrounds: 566"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 112.11411775607483,
            "unit": "iter/sec",
            "range": "stddev: 0.00007127292558272665",
            "extra": "mean: 8.919483290906204 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 102.04122364048946,
            "unit": "iter/sec",
            "range": "stddev: 0.0006563548081792204",
            "extra": "mean: 9.799960881723539 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 66.15992282399411,
            "unit": "iter/sec",
            "range": "stddev: 0.00043743282539805944",
            "extra": "mean: 15.11489066667006 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 8.459951985543311,
            "unit": "iter/sec",
            "range": "stddev: 0.004032194291887749",
            "extra": "mean: 118.2039805555443 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.55474119319516,
            "unit": "iter/sec",
            "range": "stddev: 0.0030733074492112463",
            "extra": "mean: 391.4290820000133 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2245.9308264316205,
            "unit": "iter/sec",
            "range": "stddev: 0.0000810132394508535",
            "extra": "mean: 445.2496881165392 usec\nrounds: 202"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 102.57906651459152,
            "unit": "iter/sec",
            "range": "stddev: 0.0007230702199179711",
            "extra": "mean: 9.748577696968546 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6270467177926182,
            "unit": "iter/sec",
            "range": "stddev: 0.0020413605950616886",
            "extra": "mean: 614.6105020000164 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4552.49284569447,
            "unit": "iter/sec",
            "range": "stddev: 0.000031257707545312456",
            "extra": "mean: 219.65987293000407 usec\nrounds: 2054"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 277.1762503648494,
            "unit": "iter/sec",
            "range": "stddev: 0.00025153226927390634",
            "extra": "mean: 3.6078127136927916 msec\nrounds: 241"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1164.2035428770967,
            "unit": "iter/sec",
            "range": "stddev: 0.000009744567073563713",
            "extra": "mean: 858.9563277987452 usec\nrounds: 241"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 102.13043452126374,
            "unit": "iter/sec",
            "range": "stddev: 0.0006485203228822596",
            "extra": "mean: 9.791400621053837 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12368.653004882335,
            "unit": "iter/sec",
            "range": "stddev: 0.00002732059411506325",
            "extra": "mean: 80.84954761082435 usec\nrounds: 5734"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 84.35062671345077,
            "unit": "iter/sec",
            "range": "stddev: 0.02014325802628421",
            "extra": "mean: 11.855276468746586 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 271.05333820504393,
            "unit": "iter/sec",
            "range": "stddev: 0.000277332343373914",
            "extra": "mean: 3.6893107704267756 msec\nrounds: 257"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 85.29863648655741,
            "unit": "iter/sec",
            "range": "stddev: 0.000516244620874075",
            "extra": "mean: 11.723516825003344 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.958010469889899,
            "unit": "iter/sec",
            "range": "stddev: 0.0009268032644730092",
            "extra": "mean: 1.0438299281999774 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2199.706667406154,
            "unit": "iter/sec",
            "range": "stddev: 0.00008928212905751345",
            "extra": "mean: 454.60606853511894 usec\nrounds: 1284"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-oracle]",
            "value": 231.52368971755914,
            "unit": "iter/sec",
            "range": "stddev: 0.00030372169863180786",
            "extra": "mean: 4.319212436619001 msec\nrounds: 213"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2172.923929678635,
            "unit": "iter/sec",
            "range": "stddev: 0.00009392291187671636",
            "extra": "mean: 460.2093917516455 usec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1783.520558098485,
            "unit": "iter/sec",
            "range": "stddev: 0.00000895434067737308",
            "extra": "mean: 560.6887991614507 usec\nrounds: 1429"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2209.2020922224074,
            "unit": "iter/sec",
            "range": "stddev: 0.00008938965294967348",
            "extra": "mean: 452.65211522320374 usec\nrounds: 1432"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 100.6568508964431,
            "unit": "iter/sec",
            "range": "stddev: 0.00017053230982778754",
            "extra": "mean: 9.934743547945994 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5585386.784677805,
            "unit": "iter/sec",
            "range": "stddev: 8.784088375542295e-9",
            "extra": "mean: 179.03863036736652 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1641393.255787107,
            "unit": "iter/sec",
            "range": "stddev: 7.663829815535259e-8",
            "extra": "mean: 609.2385212832278 nsec\nrounds: 129871"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1963161.8038003312,
            "unit": "iter/sec",
            "range": "stddev: 7.697561590173692e-8",
            "extra": "mean: 509.3823637278284 nsec\nrounds: 106383"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 53.52767619591377,
            "unit": "iter/sec",
            "range": "stddev: 0.0004037969148523531",
            "extra": "mean: 18.681924400004846 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 36.85522821932327,
            "unit": "iter/sec",
            "range": "stddev: 0.0007253902951045506",
            "extra": "mean: 27.133192448275167 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 227.05248449022687,
            "unit": "iter/sec",
            "range": "stddev: 0.014023832491155144",
            "extra": "mean: 4.404268036287633 msec\nrounds: 248"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 100.04938322919323,
            "unit": "iter/sec",
            "range": "stddev: 0.0009457400973673279",
            "extra": "mean: 9.995064114580288 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6087135.701539309,
            "unit": "iter/sec",
            "range": "stddev: 9.98247772538544e-9",
            "extra": "mean: 164.28087840158696 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 145214.54446818,
            "unit": "iter/sec",
            "range": "stddev: 4.190788189556538e-7",
            "extra": "mean: 6.886362544897312 usec\nrounds: 40486"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 235.89167363445716,
            "unit": "iter/sec",
            "range": "stddev: 0.003940977115480521",
            "extra": "mean: 4.239233986484922 msec\nrounds: 222"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2211.7004034343804,
            "unit": "iter/sec",
            "range": "stddev: 0.00008281641708184283",
            "extra": "mean: 452.1408046257877 usec\nrounds: 1254"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 107.09781013004078,
            "unit": "iter/sec",
            "range": "stddev: 0.0007001779932864471",
            "extra": "mean: 9.337259079207833 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 99.22709367469496,
            "unit": "iter/sec",
            "range": "stddev: 0.0010071251837500549",
            "extra": "mean: 10.077892669903134 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10358.428856609527,
            "unit": "iter/sec",
            "range": "stddev: 0.00000307321799257271",
            "extra": "mean: 96.53973723649392 usec\nrounds: 4936"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 272.7924659326034,
            "unit": "iter/sec",
            "range": "stddev: 0.0002948209816994098",
            "extra": "mean: 3.6657903897062236 msec\nrounds: 136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 42.26932648125747,
            "unit": "iter/sec",
            "range": "stddev: 0.001104176451359101",
            "extra": "mean: 23.657817222221585 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 4530736.480686122,
            "unit": "iter/sec",
            "range": "stddev: 1.6083225971732133e-8",
            "extra": "mean: 220.71466841313185 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 101.3351142479774,
            "unit": "iter/sec",
            "range": "stddev: 0.000865650888476294",
            "extra": "mean: 9.868247619999693 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 109.84341612787338,
            "unit": "iter/sec",
            "range": "stddev: 0.00002332238505703173",
            "extra": "mean: 9.103868354165693 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 160.5965916973323,
            "unit": "iter/sec",
            "range": "stddev: 0.0002646458419158901",
            "extra": "mean: 6.226782208956501 msec\nrounds: 134"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 284.28495521709004,
            "unit": "iter/sec",
            "range": "stddev: 0.00023414491684909132",
            "extra": "mean: 3.5175973320021967 msec\nrounds: 250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-oracle]",
            "value": 2226.420889810348,
            "unit": "iter/sec",
            "range": "stddev: 0.00008817005734621768",
            "extra": "mean: 449.15137320921497 usec\nrounds: 1814"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 104.82674070447705,
            "unit": "iter/sec",
            "range": "stddev: 0.00006372732777636444",
            "extra": "mean: 9.539550626868731 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 419.5978175384241,
            "unit": "iter/sec",
            "range": "stddev: 0.000027309814921427003",
            "extra": "mean: 2.383234512196733 msec\nrounds: 369"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 80.68503867426962,
            "unit": "iter/sec",
            "range": "stddev: 0.01891989042624439",
            "extra": "mean: 12.393871483870267 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 317.9976382575708,
            "unit": "iter/sec",
            "range": "stddev: 0.000025009337603493647",
            "extra": "mean: 3.144677443138816 msec\nrounds: 255"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[oracle]",
            "value": 101.2196491996624,
            "unit": "iter/sec",
            "range": "stddev: 0.0007796173103277675",
            "extra": "mean: 9.879504699995891 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 104.00086621712123,
            "unit": "iter/sec",
            "range": "stddev: 0.0007431724822018213",
            "extra": "mean: 9.615304529409526 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 102.82574237900211,
            "unit": "iter/sec",
            "range": "stddev: 0.0008210296013392165",
            "extra": "mean: 9.725191152174053 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 25.03509111576604,
            "unit": "iter/sec",
            "range": "stddev: 0.0013436253227086846",
            "extra": "mean: 39.9439329130399 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 742.7535858844933,
            "unit": "iter/sec",
            "range": "stddev: 0.000012615733928208545",
            "extra": "mean: 1.3463415310330276 msec\nrounds: 580"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 5464.530707935393,
            "unit": "iter/sec",
            "range": "stddev: 0.0039031225735618783",
            "extra": "mean: 182.99833113717088 usec\nrounds: 3491"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2172.1020583102004,
            "unit": "iter/sec",
            "range": "stddev: 0.00008031250593200114",
            "extra": "mean: 460.38352395741293 usec\nrounds: 1294"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 170.65974469571705,
            "unit": "iter/sec",
            "range": "stddev: 0.0038489240498766415",
            "extra": "mean: 5.8596126566518665 msec\nrounds: 233"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17060639524116833,
            "unit": "iter/sec",
            "range": "stddev: 0.09812449667409563",
            "extra": "mean: 5.86144498619999 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7841757077364453,
            "unit": "iter/sec",
            "range": "stddev: 0.004480838518515321",
            "extra": "mean: 1.27522440460001 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 97.3174613866865,
            "unit": "iter/sec",
            "range": "stddev: 0.0007819526953838917",
            "extra": "mean: 10.27564823158041 msec\nrounds: 95"
          }
        ]
      }
    ]
  }
}