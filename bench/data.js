window.BENCHMARK_DATA = {
  "lastUpdate": 1683628775251,
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
          "id": "edc0340ccee78b7f665e28a0f73f7b1a62bbb76b",
          "message": "chore(deps): relock",
          "timestamp": "2023-05-09T03:32:46-07:00",
          "tree_id": "cd38c5c4c85acfc9e71471a9bea6172ad23a279a",
          "url": "https://github.com/ibis-project/ibis/commit/edc0340ccee78b7f665e28a0f73f7b1a62bbb76b"
        },
        "date": 1683628688027,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1754.610539896966,
            "unit": "iter/sec",
            "range": "stddev: 0.0000060367284572989",
            "extra": "mean: 569.9270449262899 usec\nrounds: 1291"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 283.6610212921009,
            "unit": "iter/sec",
            "range": "stddev: 0.0002458141196515345",
            "extra": "mean: 3.5253345540565006 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 100.70413969437487,
            "unit": "iter/sec",
            "range": "stddev: 0.0005900493360391325",
            "extra": "mean: 9.930078376468748 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 179.19362729996118,
            "unit": "iter/sec",
            "range": "stddev: 0.004065783256989727",
            "extra": "mean: 5.580555598252666 msec\nrounds: 229"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 8.529864903744079,
            "unit": "iter/sec",
            "range": "stddev: 0.00016801965669853446",
            "extra": "mean: 117.2351509999956 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-oracle]",
            "value": 2335.201511336205,
            "unit": "iter/sec",
            "range": "stddev: 0.00010667779090111695",
            "extra": "mean: 428.22856834646313 usec\nrounds: 139"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2432.633473103821,
            "unit": "iter/sec",
            "range": "stddev: 0.00007654152643876351",
            "extra": "mean: 411.07713556374364 usec\nrounds: 1763"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2416.193834376791,
            "unit": "iter/sec",
            "range": "stddev: 0.00007939637366216734",
            "extra": "mean: 413.8740798740305 usec\nrounds: 313"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13423.100130723986,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022534779984580565",
            "extra": "mean: 74.49843853217716 usec\nrounds: 7386"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12009.937544444221,
            "unit": "iter/sec",
            "range": "stddev: 0.000012567896539170187",
            "extra": "mean: 83.26437971050053 usec\nrounds: 4485"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 112.24279517799215,
            "unit": "iter/sec",
            "range": "stddev: 0.00008204696491711623",
            "extra": "mean: 8.909257813957877 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2563888.823082797,
            "unit": "iter/sec",
            "range": "stddev: 1.532517433862269e-8",
            "extra": "mean: 390.03251271936176 nsec\nrounds: 94340"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 395.00422936088654,
            "unit": "iter/sec",
            "range": "stddev: 0.00003682630325259753",
            "extra": "mean: 2.5316184629668177 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 542.496961743491,
            "unit": "iter/sec",
            "range": "stddev: 0.000020199695863588815",
            "extra": "mean: 1.8433282958602637 msec\nrounds: 169"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 104.28528665408771,
            "unit": "iter/sec",
            "range": "stddev: 0.00045046396032832827",
            "extra": "mean: 9.58908041665533 msec\nrounds: 12"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 269.56480228012833,
            "unit": "iter/sec",
            "range": "stddev: 0.0002809393253642298",
            "extra": "mean: 3.709683132001828 msec\nrounds: 250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 280.95784854686326,
            "unit": "iter/sec",
            "range": "stddev: 0.00023456382072997568",
            "extra": "mean: 3.5592527675310763 msec\nrounds: 271"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 29.896749582209726,
            "unit": "iter/sec",
            "range": "stddev: 0.0001468637659483876",
            "extra": "mean: 33.448452222212715 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9213197336619631,
            "unit": "iter/sec",
            "range": "stddev: 0.0044742224029541535",
            "extra": "mean: 1.0853995236000287 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8168.500693318347,
            "unit": "iter/sec",
            "range": "stddev: 0.000012779521058007023",
            "extra": "mean: 122.42148682413382 usec\nrounds: 3757"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 261.3831028461378,
            "unit": "iter/sec",
            "range": "stddev: 0.00014685039869340977",
            "extra": "mean: 3.825802009048176 msec\nrounds: 221"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 96.53213630145822,
            "unit": "iter/sec",
            "range": "stddev: 0.0007357688771709156",
            "extra": "mean: 10.35924447872075 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.3449727479375706,
            "unit": "iter/sec",
            "range": "stddev: 0.0003861421801815639",
            "extra": "mean: 743.5094886000002 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 60.131307046903714,
            "unit": "iter/sec",
            "range": "stddev: 0.00008898718956531969",
            "extra": "mean: 16.630272134613314 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7263835.682897508,
            "unit": "iter/sec",
            "range": "stddev: 3.950492750429963e-9",
            "extra": "mean: 137.66831239788644 nsec\nrounds: 62894"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1906071.1161330948,
            "unit": "iter/sec",
            "range": "stddev: 8.73168938691796e-8",
            "extra": "mean: 524.6393964715917 nsec\nrounds: 136987"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 101.26691684558529,
            "unit": "iter/sec",
            "range": "stddev: 0.0007416731773251039",
            "extra": "mean: 9.874893313132352 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2305.4808252996645,
            "unit": "iter/sec",
            "range": "stddev: 0.00008445588148268025",
            "extra": "mean: 433.7489989187053 usec\nrounds: 1849"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 85.82529788684947,
            "unit": "iter/sec",
            "range": "stddev: 0.0005055086731169428",
            "extra": "mean: 11.651576220782617 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 103.88996091010097,
            "unit": "iter/sec",
            "range": "stddev: 0.0005836563784415567",
            "extra": "mean: 9.625569123712824 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 139561.0475370818,
            "unit": "iter/sec",
            "range": "stddev: 3.987017415619104e-7",
            "extra": "mean: 7.165323115923854 usec\nrounds: 36767"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 55.816206213137725,
            "unit": "iter/sec",
            "range": "stddev: 0.00014593709360532172",
            "extra": "mean: 17.915943555558698 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 164.9190704231377,
            "unit": "iter/sec",
            "range": "stddev: 0.00006122040821892982",
            "extra": "mean: 6.063580139242058 msec\nrounds: 158"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 97.53501660218403,
            "unit": "iter/sec",
            "range": "stddev: 0.0006770583821959032",
            "extra": "mean: 10.252728044110548 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 102.15505480420998,
            "unit": "iter/sec",
            "range": "stddev: 0.0006855763822314886",
            "extra": "mean: 9.789040805827929 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1156.0831040739401,
            "unit": "iter/sec",
            "range": "stddev: 0.000014084852476867984",
            "extra": "mean: 864.9897195764594 usec\nrounds: 189"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.978997993967667,
            "unit": "iter/sec",
            "range": "stddev: 0.0004289080645492736",
            "extra": "mean: 37.065868800004864 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 66.89771688628475,
            "unit": "iter/sec",
            "range": "stddev: 0.00038208799325053843",
            "extra": "mean: 14.948193250000408 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-oracle]",
            "value": 86.0968344582673,
            "unit": "iter/sec",
            "range": "stddev: 0.011462855066755437",
            "extra": "mean: 11.61482888763719 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6641994283293096,
            "unit": "iter/sec",
            "range": "stddev: 0.002438318330314052",
            "extra": "mean: 600.889522600005 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 106.52081159777987,
            "unit": "iter/sec",
            "range": "stddev: 0.00017739382953185486",
            "extra": "mean: 9.387836846155256 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 172.17318990096643,
            "unit": "iter/sec",
            "range": "stddev: 0.000045943667634139966",
            "extra": "mean: 5.808105202530065 msec\nrounds: 158"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 279.87919627074234,
            "unit": "iter/sec",
            "range": "stddev: 0.00023011945665926692",
            "extra": "mean: 3.5729701004023386 msec\nrounds: 249"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 262.78378259942707,
            "unit": "iter/sec",
            "range": "stddev: 0.003947479024365784",
            "extra": "mean: 3.805409870076892 msec\nrounds: 254"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 117.99074957466485,
            "unit": "iter/sec",
            "range": "stddev: 0.00011122429888917931",
            "extra": "mean: 8.47524067441573 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 101.60209693353522,
            "unit": "iter/sec",
            "range": "stddev: 0.0006924018811325487",
            "extra": "mean: 9.842316548389425 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 87.16934630451696,
            "unit": "iter/sec",
            "range": "stddev: 0.015408692881582392",
            "extra": "mean: 11.471922670001504 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2550284.5948162572,
            "unit": "iter/sec",
            "range": "stddev: 1.559005639487778e-8",
            "extra": "mean: 392.1131006445842 nsec\nrounds: 121952"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7899599111049475,
            "unit": "iter/sec",
            "range": "stddev: 0.004252768146987631",
            "extra": "mean: 1.265887022800007 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 268.41388235537573,
            "unit": "iter/sec",
            "range": "stddev: 0.00025136853389868933",
            "extra": "mean: 3.7255897169879457 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 101.2428803289192,
            "unit": "iter/sec",
            "range": "stddev: 0.0007586120887423809",
            "extra": "mean: 9.877237754903721 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.923121242724249,
            "unit": "iter/sec",
            "range": "stddev: 0.0032160454631400912",
            "extra": "mean: 1.0832813218000183 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 192.67557612604895,
            "unit": "iter/sec",
            "range": "stddev: 0.00002814830890563886",
            "extra": "mean: 5.1900714148937945 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[oracle]",
            "value": 88.39721683382926,
            "unit": "iter/sec",
            "range": "stddev: 0.014297560803430953",
            "extra": "mean: 11.312573357143345 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9825.71112369757,
            "unit": "iter/sec",
            "range": "stddev: 0.000001991800399754281",
            "extra": "mean: 101.77380419705277 usec\nrounds: 4622"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 99.55948780561785,
            "unit": "iter/sec",
            "range": "stddev: 0.0006985881313193602",
            "extra": "mean: 10.044246129032144 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 102.63445733328464,
            "unit": "iter/sec",
            "range": "stddev: 0.00006729081826264121",
            "extra": "mean: 9.743316484372322 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-oracle]",
            "value": 222.5655276462614,
            "unit": "iter/sec",
            "range": "stddev: 0.0004934188576339751",
            "extra": "mean: 4.493058788463271 msec\nrounds: 208"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12208968.778405087,
            "unit": "iter/sec",
            "range": "stddev: 3.298346022609187e-9",
            "extra": "mean: 81.90699953034749 nsec\nrounds: 119048"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 36.99547027725964,
            "unit": "iter/sec",
            "range": "stddev: 0.026174601572191515",
            "extra": "mean: 27.03033621428728 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 100.68064940482724,
            "unit": "iter/sec",
            "range": "stddev: 0.00006455351742678693",
            "extra": "mean: 9.932395211110487 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 6413051.007301196,
            "unit": "iter/sec",
            "range": "stddev: 7.877297378126425e-9",
            "extra": "mean: 155.93202032256727 nsec\nrounds: 53192"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4717.330014244326,
            "unit": "iter/sec",
            "range": "stddev: 0.000027744243948413598",
            "extra": "mean: 211.98432099946925 usec\nrounds: 2081"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 99.2075463343858,
            "unit": "iter/sec",
            "range": "stddev: 0.0006516008084242923",
            "extra": "mean: 10.079878365597633 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2340.7276455580363,
            "unit": "iter/sec",
            "range": "stddev: 0.00009717353539868613",
            "extra": "mean: 427.2175799254924 usec\nrounds: 1614"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1786050950513794,
            "unit": "iter/sec",
            "range": "stddev: 0.06081055201539198",
            "extra": "mean: 5.598944418199994 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 37.30078220215683,
            "unit": "iter/sec",
            "range": "stddev: 0.000743409925110126",
            "extra": "mean: 26.809089272722467 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6476671.304059133,
            "unit": "iter/sec",
            "range": "stddev: 8.068260172088691e-9",
            "extra": "mean: 154.4003011814524 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 100.61778241375872,
            "unit": "iter/sec",
            "range": "stddev: 0.0006405214028600006",
            "extra": "mean: 9.93860107041335 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2307.420997370421,
            "unit": "iter/sec",
            "range": "stddev: 0.00008691086511770216",
            "extra": "mean: 433.38428537298495 usec\nrounds: 1661"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 157.1311094227913,
            "unit": "iter/sec",
            "range": "stddev: 0.00007524583665358853",
            "extra": "mean: 6.364112133322426 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5818008.525007865,
            "unit": "iter/sec",
            "range": "stddev: 7.63576460628982e-9",
            "extra": "mean: 171.88011940931634 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 272.4143190305684,
            "unit": "iter/sec",
            "range": "stddev: 0.00028347856366795686",
            "extra": "mean: 3.6708789888823254 msec\nrounds: 180"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 123.56558034914842,
            "unit": "iter/sec",
            "range": "stddev: 0.00007441925017001476",
            "extra": "mean: 8.092868557525387 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 18.911922355044066,
            "unit": "iter/sec",
            "range": "stddev: 0.00011379876039559656",
            "extra": "mean: 52.87669763160202 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 102.20339380018262,
            "unit": "iter/sec",
            "range": "stddev: 0.0006318896410105138",
            "extra": "mean: 9.784410896913025 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 745.262852245652,
            "unit": "iter/sec",
            "range": "stddev: 0.00008448395404461234",
            "extra": "mean: 1.3418084599101714 msec\nrounds: 661"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2358.9625588876556,
            "unit": "iter/sec",
            "range": "stddev: 0.00007506569867237145",
            "extra": "mean: 423.9151639912164 usec\nrounds: 1494"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2363.3905959228114,
            "unit": "iter/sec",
            "range": "stddev: 0.00007907419254327934",
            "extra": "mean: 423.12091861799905 usec\nrounds: 1794"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 682.8646371166956,
            "unit": "iter/sec",
            "range": "stddev: 0.000028313251360732313",
            "extra": "mean: 1.464419074653457 msec\nrounds: 576"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 46.59132572854281,
            "unit": "iter/sec",
            "range": "stddev: 0.000370846822318625",
            "extra": "mean: 21.463222700000983 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 274.51222485803777,
            "unit": "iter/sec",
            "range": "stddev: 0.000239362843160769",
            "extra": "mean: 3.6428250163253884 msec\nrounds: 245"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2320.4733950304294,
            "unit": "iter/sec",
            "range": "stddev: 0.00008492355669009834",
            "extra": "mean: 430.9465482955415 usec\nrounds: 1791"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 188.87813278274146,
            "unit": "iter/sec",
            "range": "stddev: 0.000059108424158228516",
            "extra": "mean: 5.2944191329456745 msec\nrounds: 173"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1587189.1564110795,
            "unit": "iter/sec",
            "range": "stddev: 9.949729331691355e-8",
            "extra": "mean: 630.0446269814369 nsec\nrounds: 156251"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 102.01377044334782,
            "unit": "iter/sec",
            "range": "stddev: 0.0007261669815563651",
            "extra": "mean: 9.802598175266334 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 1049057.2360605286,
            "unit": "iter/sec",
            "range": "stddev: 1.1161624394264123e-7",
            "extra": "mean: 953.2368355374483 nsec\nrounds: 135136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.4789901015159437,
            "unit": "iter/sec",
            "range": "stddev: 0.0023563856506794573",
            "extra": "mean: 403.39007380000567 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 50.115544153851616,
            "unit": "iter/sec",
            "range": "stddev: 0.00007815982670526979",
            "extra": "mean: 19.953888895829646 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 4721449.28503155,
            "unit": "iter/sec",
            "range": "stddev: 1.0634532467290453e-8",
            "extra": "mean: 211.79937337678078 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 422.7424581798459,
            "unit": "iter/sec",
            "range": "stddev: 0.00016747605043952924",
            "extra": "mean: 2.36550642276526 msec\nrounds: 369"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 82.20901472386718,
            "unit": "iter/sec",
            "range": "stddev: 0.017546551587185495",
            "extra": "mean: 12.164116105258184 msec\nrounds: 95"
          }
        ]
      }
    ]
  }
}