window.BENCHMARK_DATA = {
  "lastUpdate": 1682434146915,
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
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "5ed51107a866fcfac01b9f7aadb3f38607eb3f04",
          "message": "depr(api): deprecate tuple syntax for order by keys",
          "timestamp": "2023-04-25T10:33:08-04:00",
          "tree_id": "7173f58c1616998de230f9486fcc22651c9fa532",
          "url": "https://github.com/ibis-project/ibis/commit/5ed51107a866fcfac01b9f7aadb3f38607eb3f04"
        },
        "date": 1682434063706,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 173.09463447340613,
            "unit": "iter/sec",
            "range": "stddev: 0.0037951327798322865",
            "extra": "mean: 5.777186583756516 msec\nrounds: 197"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.53172455814458,
            "unit": "iter/sec",
            "range": "stddev: 0.001517481196570837",
            "extra": "mean: 394.98767620000024 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.792859270411179,
            "unit": "iter/sec",
            "range": "stddev: 0.0034913343742948",
            "extra": "mean: 1.2612578767999991 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 78.76572959619504,
            "unit": "iter/sec",
            "range": "stddev: 0.01767041422607095",
            "extra": "mean: 12.695876812500284 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 533.5984105883758,
            "unit": "iter/sec",
            "range": "stddev: 0.00007701473935618712",
            "extra": "mean: 1.8740685507240238 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 123.52091550303089,
            "unit": "iter/sec",
            "range": "stddev: 0.00016059210552057897",
            "extra": "mean: 8.09579491803121 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 1054258.8461752802,
            "unit": "iter/sec",
            "range": "stddev: 2.7680910561971004e-7",
            "extra": "mean: 948.5336581503445 nsec\nrounds: 71424"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1686.0076454766447,
            "unit": "iter/sec",
            "range": "stddev: 0.004179007683037284",
            "extra": "mean: 593.1171206031476 usec\nrounds: 995"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 125.57794322279861,
            "unit": "iter/sec",
            "range": "stddev: 0.00014106331714577736",
            "extra": "mean: 7.963181864077946 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2118.6123024317094,
            "unit": "iter/sec",
            "range": "stddev: 0.00009215878767707066",
            "extra": "mean: 472.0070769211601 usec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 94.66235143168576,
            "unit": "iter/sec",
            "range": "stddev: 0.0010623808091992282",
            "extra": "mean: 10.563861819148473 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 199.33213881454577,
            "unit": "iter/sec",
            "range": "stddev: 0.000034489647374970784",
            "extra": "mean: 5.01675247126294 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 90.04336237497472,
            "unit": "iter/sec",
            "range": "stddev: 0.0010598356737666066",
            "extra": "mean: 11.105760309523102 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 32.03723564021241,
            "unit": "iter/sec",
            "range": "stddev: 0.035328510674876974",
            "extra": "mean: 31.213679333332454 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 265.129282412502,
            "unit": "iter/sec",
            "range": "stddev: 0.0004006926387025194",
            "extra": "mean: 3.771744829166579 msec\nrounds: 240"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 110.38353232852397,
            "unit": "iter/sec",
            "range": "stddev: 0.00016580669049517078",
            "extra": "mean: 9.059322336449567 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.16825064528364084,
            "unit": "iter/sec",
            "range": "stddev: 0.08812593430153211",
            "extra": "mean: 5.943513609199994 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 71.76793359484877,
            "unit": "iter/sec",
            "range": "stddev: 0.0002087515852322099",
            "extra": "mean: 13.933799538458166 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 94.2636556630314,
            "unit": "iter/sec",
            "range": "stddev: 0.001212380972173782",
            "extra": "mean: 10.608542528572684 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10560.458239078163,
            "unit": "iter/sec",
            "range": "stddev: 0.0000045534110670197315",
            "extra": "mean: 94.69286060898162 usec\nrounds: 4204"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 18.742667142335602,
            "unit": "iter/sec",
            "range": "stddev: 0.00011277330294843961",
            "extra": "mean: 53.35419939999989 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 106.90214696843232,
            "unit": "iter/sec",
            "range": "stddev: 0.0000463696009488793",
            "extra": "mean: 9.354349078651293 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8605.3814756536,
            "unit": "iter/sec",
            "range": "stddev: 0.000012799875412908813",
            "extra": "mean: 116.20635329522653 usec\nrounds: 3323"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 262.8171238705259,
            "unit": "iter/sec",
            "range": "stddev: 0.0003426326288811662",
            "extra": "mean: 3.8049271115707035 msec\nrounds: 242"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 39.74901603610419,
            "unit": "iter/sec",
            "range": "stddev: 0.0004000782349382443",
            "extra": "mean: 25.157855457143796 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 94.32307652378161,
            "unit": "iter/sec",
            "range": "stddev: 0.0012190692604308363",
            "extra": "mean: 10.601859447914327 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 187.4550304117204,
            "unit": "iter/sec",
            "range": "stddev: 0.00020005902968449248",
            "extra": "mean: 5.334612775147358 msec\nrounds: 169"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 100.7081339742857,
            "unit": "iter/sec",
            "range": "stddev: 0.00010398434238074051",
            "extra": "mean: 9.929684530301543 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 551.1149676414041,
            "unit": "iter/sec",
            "range": "stddev: 0.008501776393975124",
            "extra": "mean: 1.8145034316155129 msec\nrounds: 563"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 89.60940574999935,
            "unit": "iter/sec",
            "range": "stddev: 0.001248563687460064",
            "extra": "mean: 11.159542813952955 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2124.2626870656445,
            "unit": "iter/sec",
            "range": "stddev: 0.000129332884804917",
            "extra": "mean: 470.7515723403081 usec\nrounds: 1410"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 92.15250648791556,
            "unit": "iter/sec",
            "range": "stddev: 0.0011169668194604267",
            "extra": "mean: 10.851576784090351 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 93.05939055888312,
            "unit": "iter/sec",
            "range": "stddev: 0.0009165570712420751",
            "extra": "mean: 10.74582580000083 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 164.04326038796228,
            "unit": "iter/sec",
            "range": "stddev: 0.00007692588619156166",
            "extra": "mean: 6.0959529677415585 msec\nrounds: 155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 75.68072683674495,
            "unit": "iter/sec",
            "range": "stddev: 0.02429860806897517",
            "extra": "mean: 13.213403752809548 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 93.98330161479993,
            "unit": "iter/sec",
            "range": "stddev: 0.0012420784042094352",
            "extra": "mean: 10.640188020831628 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 133.7214203359245,
            "unit": "iter/sec",
            "range": "stddev: 0.00010373530161741354",
            "extra": "mean: 7.478233460936012 msec\nrounds: 128"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 252.8668028625291,
            "unit": "iter/sec",
            "range": "stddev: 0.00034150614153175744",
            "extra": "mean: 3.9546511787221412 msec\nrounds: 235"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 39.38587638893833,
            "unit": "iter/sec",
            "range": "stddev: 0.00011260935748579854",
            "extra": "mean: 25.389812076921405 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 94.9137584504149,
            "unit": "iter/sec",
            "range": "stddev: 0.0011117533309768033",
            "extra": "mean: 10.535880322581713 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1928308.9299100905,
            "unit": "iter/sec",
            "range": "stddev: 1.5459298930085446e-7",
            "extra": "mean: 518.5891038976965 nsec\nrounds: 123457"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 90.45868936960342,
            "unit": "iter/sec",
            "range": "stddev: 0.001215133284223751",
            "extra": "mean: 11.05476993939321 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1937738.1635581532,
            "unit": "iter/sec",
            "range": "stddev: 1.0999363715427999e-7",
            "extra": "mean: 516.065595861393 nsec\nrounds: 129871"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 3825618.3032531063,
            "unit": "iter/sec",
            "range": "stddev: 1.7816490242285496e-8",
            "extra": "mean: 261.39565443582524 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.3372587168651935,
            "unit": "iter/sec",
            "range": "stddev: 0.001060881940800614",
            "extra": "mean: 747.7984531999937 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 258.61279973540474,
            "unit": "iter/sec",
            "range": "stddev: 0.00034684412789859635",
            "extra": "mean: 3.8667846333326614 msec\nrounds: 240"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 129.2113946139725,
            "unit": "iter/sec",
            "range": "stddev: 0.003810515501779597",
            "extra": "mean: 7.739255527637988 msec\nrounds: 199"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 259.95596608062414,
            "unit": "iter/sec",
            "range": "stddev: 0.00037575322173163424",
            "extra": "mean: 3.8468053458325118 msec\nrounds: 240"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 255.3175719043262,
            "unit": "iter/sec",
            "range": "stddev: 0.0003820660042499263",
            "extra": "mean: 3.916690858922647 msec\nrounds: 241"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 419.1545844207626,
            "unit": "iter/sec",
            "range": "stddev: 0.000047516342008753367",
            "extra": "mean: 2.3857546527420626 msec\nrounds: 383"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1704597.3974989143,
            "unit": "iter/sec",
            "range": "stddev: 1.7266144998612373e-7",
            "extra": "mean: 586.648789601145 nsec\nrounds: 112360"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6103511.697486395,
            "unit": "iter/sec",
            "range": "stddev: 1.1294306595096331e-8",
            "extra": "mean: 163.8401054283089 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.5963801464614953,
            "unit": "iter/sec",
            "range": "stddev: 0.0014683644622728149",
            "extra": "mean: 626.4172115999941 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1167.0231683583972,
            "unit": "iter/sec",
            "range": "stddev: 0.000016785156402503696",
            "extra": "mean: 856.8810175436862 usec\nrounds: 228"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2215.9332226909064,
            "unit": "iter/sec",
            "range": "stddev: 0.00010001698901733072",
            "extra": "mean: 451.27713676572597 usec\nrounds: 1243"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 272.0324870423327,
            "unit": "iter/sec",
            "range": "stddev: 0.00008513039244931208",
            "extra": "mean: 3.6760315316471135 msec\nrounds: 237"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11580896.510036854,
            "unit": "iter/sec",
            "range": "stddev: 4.460269461371719e-9",
            "extra": "mean: 86.3491007914203 nsec\nrounds: 116280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 75.49964243138925,
            "unit": "iter/sec",
            "range": "stddev: 0.025244112722584387",
            "extra": "mean: 13.245095841463833 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2096.5473245084745,
            "unit": "iter/sec",
            "range": "stddev: 0.00012711883429810853",
            "extra": "mean: 476.9746851454666 usec\nrounds: 1407"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 170.79573999123713,
            "unit": "iter/sec",
            "range": "stddev: 0.0000614933165091538",
            "extra": "mean: 5.854946967947246 msec\nrounds: 156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 95.53645377327547,
            "unit": "iter/sec",
            "range": "stddev: 0.0010808713901792472",
            "extra": "mean: 10.467208698924214 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 45.147545021425685,
            "unit": "iter/sec",
            "range": "stddev: 0.00018038399117393288",
            "extra": "mean: 22.149598599999837 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 6296291.501404209,
            "unit": "iter/sec",
            "range": "stddev: 5.6459119169492415e-9",
            "extra": "mean: 158.82365036255075 nsec\nrounds: 48077"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 147660.6317696566,
            "unit": "iter/sec",
            "range": "stddev: 3.709098979597436e-7",
            "extra": "mean: 6.77228580167496 usec\nrounds: 29412"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1772.6592482414417,
            "unit": "iter/sec",
            "range": "stddev: 0.00000818685959786895",
            "extra": "mean: 564.1242111206908 usec\nrounds: 1241"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 50.13405394819611,
            "unit": "iter/sec",
            "range": "stddev: 0.0001945475221010921",
            "extra": "mean: 19.946521799998607 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 14049.530946372535,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019361987456808567",
            "extra": "mean: 71.17675343162905 usec\nrounds: 5828"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2038.4159046786401,
            "unit": "iter/sec",
            "range": "stddev: 0.0001943272558963677",
            "extra": "mean: 490.57701998143096 usec\nrounds: 1101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 29.5871647100499,
            "unit": "iter/sec",
            "range": "stddev: 0.00018903653745170468",
            "extra": "mean: 33.79843962068894 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 230.65803871070864,
            "unit": "iter/sec",
            "range": "stddev: 0.0006746631593725046",
            "extra": "mean: 4.335422279620612 msec\nrounds: 211"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 82.39706388865287,
            "unit": "iter/sec",
            "range": "stddev: 0.00010972223119173526",
            "extra": "mean: 12.136354777778832 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2048.724004553626,
            "unit": "iter/sec",
            "range": "stddev: 0.0001281372681971127",
            "extra": "mean: 488.10869486438173 usec\nrounds: 1324"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7073632.941924164,
            "unit": "iter/sec",
            "range": "stddev: 5.793829817039707e-9",
            "extra": "mean: 141.37007224017248 nsec\nrounds: 58140"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7734453807981334,
            "unit": "iter/sec",
            "range": "stddev: 0.0019283197105215955",
            "extra": "mean: 1.2929161190000003 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 247.6207203506789,
            "unit": "iter/sec",
            "range": "stddev: 0.0005402649550217046",
            "extra": "mean: 4.038434257778616 msec\nrounds: 225"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 32.69853347857116,
            "unit": "iter/sec",
            "range": "stddev: 0.03807911927077433",
            "extra": "mean: 30.582411307692 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 28.0886905178179,
            "unit": "iter/sec",
            "range": "stddev: 0.00047365659180233146",
            "extra": "mean: 35.60151724999981 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4584.28122044773,
            "unit": "iter/sec",
            "range": "stddev: 0.0000244847082143199",
            "extra": "mean: 218.1367049516071 usec\nrounds: 1959"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 19.974686200028493,
            "unit": "iter/sec",
            "range": "stddev: 0.00023376057981971347",
            "extra": "mean: 50.063364699995816 msec\nrounds: 20"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2145.5785754201443,
            "unit": "iter/sec",
            "range": "stddev: 0.00009691229230465903",
            "extra": "mean: 466.07475086489495 usec\nrounds: 1156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.7890594146038495,
            "unit": "iter/sec",
            "range": "stddev: 0.0039575685480595785",
            "extra": "mean: 1.2673316881999994 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1948580.3164127658,
            "unit": "iter/sec",
            "range": "stddev: 1.3384951170384287e-7",
            "extra": "mean: 513.1941401527383 nsec\nrounds: 104167"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 8.487287918859222,
            "unit": "iter/sec",
            "range": "stddev: 0.00018499320303486336",
            "extra": "mean: 117.82326811111767 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12413.071620760691,
            "unit": "iter/sec",
            "range": "stddev: 0.00001327224148480763",
            "extra": "mean: 80.56023767135233 usec\nrounds: 4157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 92.23731789682479,
            "unit": "iter/sec",
            "range": "stddev: 0.0010868468520828403",
            "extra": "mean: 10.841598853932247 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 4497460.3370952755,
            "unit": "iter/sec",
            "range": "stddev: 1.56822088830077e-8",
            "extra": "mean: 222.347708494487 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 84.23865859166703,
            "unit": "iter/sec",
            "range": "stddev: 0.0012425006982195767",
            "extra": "mean: 11.87103423438085 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 739.70815048223,
            "unit": "iter/sec",
            "range": "stddev: 0.000029911095981131424",
            "extra": "mean: 1.3518845227649319 msec\nrounds: 593"
          }
        ]
      }
    ]
  }
}